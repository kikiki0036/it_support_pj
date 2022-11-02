import express from "express";
import {
    Login, Logout, getUserAccount, getServiceType, getServiceOption, AddNote, getNotes, CreateNote, getDataJobCutOfUser,
    getChartDataTikket, getDataJobCountCutOfUser, Job_CloseJOB, Job_OpenJOB, getRootitem, getRootcase,
    getDataTikketCut,getDataJob,getDataJobCut, getProfileCut ,UpdateProfile, getDataAllUser, getDataTikket, LastJob,
    UpdateStatusTk, getDataTikketAll, UpdateItemTK, CreateJob, UpdateJob, CanceltaskJob,  getOptionItems, getItemOption, getSec, getNotebook_center,
    getData_book_round, getDataBookCurrentDate, getDataBook, getDataBookCheckForAdding, getTeamMember, getDataUserForDeviceCenter,
    updateDataBooking, deleteDataBooking, getUserAccountForSchedu,getDataJobForSchedu, Job_upDateAssignDetail

} from "../controllers/Users.js";
// import  { 
//             getUsers, getNotes, Register, Login, Logout,
//             AddNote, CreateNote, getDataJob, getDataJobCount,
//             getDataTikket, getDataAllEmp, getDept, getSec, getPos, 
//             getServiceOption, getServiceType, getDataDevice,getItemOption,
//             getAllItem, getDataAllEmpIT, CreateTikket, CreateJob, LastJob,
//             LastTikket, CreateItemTK, geterp_prom, getAllerp_prom, getDataAllServiceDetail,
//             UpdateDataServiceDetail, RemoveServiceOption, CreateServiceOption,
//             LastOption, UpdateAllDetailServiceOption, UpdateDetailItem, CreateItem,
//             LastItem, DelDataItem, getOptionItems, CreateNewServiceType, LastS_type,
//             RemoveNewServiceType, UpdateErp_prom, AddErp_prom, getDataAllEmpNP, getAllProfileCut,
//             getProfileCut, getEmpProfile,getDataTikketCut,CheckNotebook,FindnameEmp,
//             Findschedudata,Addschedu,Upschedu,Delschedu,Checknote,Testwhere,getChartDataTikket,
//             UpdateProfile, CreateProfile, UpdateItemTK, UpdateStatusTk, HistoryNC, getDataJobCut,
//             getDataTikketAll, Job_OpenJOB, Job_CloseJOB,getRootitem, getRootcase, CreateDevice,
//             UpdateDevice, UpdateDeviceProfile, getDeviceDetail, getDataDeviceCut, getProfileIDCut,
//             getLoaction, getDeviceType, formatSchedudata, HistoryNCCUT, getDataTikketAllofUser,getDataJobCutOfUser,
//             getDataJobCountCutOfUser,getUser_Account

            
//         } from "../controllers/Users.js";

import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/token', refreshToken);
router.get('/getUserAccount', getUserAccount);
router.get('/getTeamMember', getTeamMember);
router.get('/getDataUserForDeviceCenter', getDataUserForDeviceCenter);
router.get('/getUserAccountForSchedu', getUserAccountForSchedu);
router.get('/getDataJobForSchedu', getDataJobForSchedu);

// router.get('/users', verifyToken, getUsers);

router.post('/getDataJobCountCutOfUser', getDataJobCountCutOfUser);
router.post('/getDataJobCutOfUser', getDataJobCutOfUser);
// router.post('/getDataTikketAllofUser', getDataTikketAllofUser);
// router.post('/HistoryNCCUT', HistoryNCCUT);
// router.get('/getDeviceType', getDeviceType);
// router.get('/getDeviceDetail', getDeviceDetail);
// router.post('/CreateDevice', CreateDevice);
// router.post('/UpdateDevice', UpdateDevice);
// router.post('/getDataDeviceCut', getDataDeviceCut);
// router.post('/UpdateDeviceProfile', UpdateDeviceProfile);
router.get('/getDataBook', getDataBook);
router.post('/updateDataBooking', updateDataBooking);
router.post('/deleteDataBooking', deleteDataBooking);
router.post('/getDataBookCheckForAdding', getDataBookCheckForAdding);
router.get('/getDataBookCurrentDate', getDataBookCurrentDate);
router.get('/getData_book_round', getData_book_round);
router.get('/getNotebook_center', getNotebook_center);
router.get('/getRootitem', getRootitem);
router.get('/getRootcase', getRootcase);
router.post('/UpdateProfile', UpdateProfile);
// router.post('/CreateProfile', CreateProfile);
// router.get('/getEmpProfile', getEmpProfile);
router.get('/getDataAllUser', getDataAllUser);
router.post('/getProfileCut', getProfileCut);
// router.post('/getProfileIDCut', getProfileIDCut);
// router.get('/getAllProfileCut', getAllProfileCut);
// router.get('/getDataAllEmp', getDataAllEmp);
// router.get('/getDataAllEmpIT', getDataAllEmpIT);
// router.get('/getDept', getDept);
router.get('/getSec', getSec);
// router.get('/getLoaction', getLoaction);
// router.get('/getPos', getPos);
// router.get('/getDataProfile', getUsers);
// router.post('/RemoveNewServiceType', RemoveNewServiceType);
// router.post('/CreateNewServiceType', CreateNewServiceType);
// router.get('/LastS_type', LastS_type);
router.get('/getServiceType', getServiceType);
router.get('/getServiceOption', getServiceOption);
// router.get('/getDataAllServiceDetail', getDataAllServiceDetail);
// router.get('/getDataDevice', getDataDevice);
// router.post('/getDataJobCount', getDataJobCount);
router.post('/CreateJob', CreateJob);
router.post('/UpdateJob', UpdateJob);
router.post('/CanceltaskJob', CanceltaskJob);
router.post('/Job_OpenJOB', Job_OpenJOB);
router.post('/Job_CloseJOB', Job_CloseJOB);
router.post('/Job_upDateAssignDetail', Job_upDateAssignDetail);
router.get('/getDataJob', getDataJob);
router.post('/getDataJobCut', getDataJobCut);
router.get('/LastJob', LastJob);
router.get('/getOptionItems', getOptionItems);
router.post('/UpdateItemTK', UpdateItemTK);
router.post('/getItemOption', getItemOption);
// router.get('/getAllItem', getAllItem);
// router.get('/LastItem', LastItem);
// router.post('/UpdateDetailItem', UpdateDetailItem);
// router.post('/DelDataItem', DelDataItem);
// router.post('/CreateItem', CreateItem);
router.get('/getChartDataTikket', getChartDataTikket);
// router.post('/CreateTikket', CreateTikket);
router.post('/UpdateStatusTk', UpdateStatusTk);
router.post('/getDataTikketCut', getDataTikketCut);
router.post('/getDataTikketAll', getDataTikketAll);
router.post('/getDataTikket', getDataTikket);
// router.get('/LastTikket', LastTikket);
// router.post('/CreateItemTK', CreateItemTK);
router.post('/getnotes', getNotes);
router.post('/createnote', CreateNote);
router.post('/notes', AddNote);
// router.post('/users', Register);
// router.post('/UpdateErp_prom', UpdateErp_prom);
// router.post('/AddErp_prom', AddErp_prom);
// router.post('/geterp_prom', geterp_prom);
// router.get('/getAllerp_prom', getAllerp_prom);
// router.get('/LastOption', LastOption);
// router.post('/CreateServiceOption', CreateServiceOption);
// router.post('/RemoveServiceOption', RemoveServiceOption);
router.post('/login', Login);
router.delete('/logout', Logout);

// router.post('/UpdateDataServiceDetail', UpdateDataServiceDetail);
// router.post('/UpdateAllDetailServiceOption', UpdateAllDetailServiceOption);

// router.post('/checkNotebook',CheckNotebook);
// router.get('/findnameemp',FindnameEmp);
// router.get('/findschedudata',Findschedudata);
// router.post('/addschedu',Addschedu);
// router.post('/upschedu',Upschedu);
// router.post('/delschedu',Delschedu);
// router.post('/checknote',Checknote);
// router.get('/HistoryNC',HistoryNC);
// router.post('/testw',Testwhere);
// router.get('/formatSchedudata',formatSchedudata);

export default router;