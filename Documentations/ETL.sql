-- Load location
INSERT INTO location(mun, zone, brgy, purok)
SELECT distinct mun, zone, brgy, purok 
FROM hpq_hh;

-- Transform and load hpq_hh to household
INSERT INTO household
SELECT H.id, L.id AS location, house_type,roof,wall,water,welec,tenur
FROM db_hpq.hpq_hh H LEFT JOIN location L 
		ON H.mun = L.mun AND H.zone = L.zone AND H.brgy = L.brgy AND H.purok = L.purok
GROUP BY H.id;
        
-- Load hpq_crop to crop
INSERT INTO crop(crop_vol,crop_line,croptype,household)
SELECT crop_vol, crop_line, croptype, hpq_hh_id AS household
FROM db_hpq.hpq_crop C INNER JOIN household H ON C.hpq_hh_id = H.id;

-- Transform and load hpq_arcdp_mem to arcdp
INSERT INTO arcdp
SELECT age, household, gradel, sch_type, educal, workcl, jobind, jstatus, educind, gradel_calc, work_ddhrs
FROM (SELECT A.hpq_hh_id AS household, arcdp_mem_refno as memno
		FROM db_hpq.hpq_arcdp_mem A INNER JOIN household H 
				ON H.id = A.hpq_hh_id) X
	INNER JOIN db_hpq.hpq_mem M
		ON M.memno = X.memno AND M.id = X.household;
        
-- Load hpq_alp to land_parcel
INSERT INTO land_parcel
SELECT H.id AS household, alp_line, alp_area
FROM db_hpq.hpq_alp A INNER JOIN household H 
		ON a.hpq_hh_id = H.id;