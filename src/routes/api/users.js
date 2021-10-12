/**
 *
 * Author:  AppSeed.us
 *
 * License: MIT - Copyright (c) AppSeed.us
 * @link https://github.com/app-generator/nodejs-starter
 *
 */

 const router      = require('express').Router();
 const dateFormat = require('dateformat');
 const srs = require('secure-random-string');
 const url = require('url');
 const jwt = require("jsonwebtoken");
 

 /* GET default page */
 router.get('/',
     function (req, res) {
         var html = 'Server Health is OK.';
         var date1 = new Date;
         //console.log(date1.toString());        
         res.status(200).send(html + ". Current DateTime: " + date1.toString());
     }
     
 );
 
 /* GET login*/
 router.get('/login',
     function (req, res) {
         // list out all tenant login link from env for testing
         var currentDate = new Date();
        var currentDateString = dateFormat(new Date(), "dd-mmm-yyyy HH:MM:ss"); // ensure GMT+0800 Singapore Time
         var sessionId = srs({ length: 20 });
         var url = "https://localhost:8111/api/users/login";
         var encodeTenantId = "";
         var encodeReturnUri = "";
         var encodeNonce = "";
         var encodeState = "";
         var queryString = "";
         var hash = "";
         var tenantId = "";
         var callbackUrl = "";
         var tenantName = "";
     
        // form ahref
        encodeTenantId = Buffer.from("f98188a6-88cb-4663-a2b4-46e4335969dc", 'utf-8').toString('base64');
        encodeRedirectUri = Buffer.from("http://localhost:8080/api/users/login/callback", 'utf-8').toString('base64');
        encodeNonce = Buffer.from(currentDateString + "." + sessionId, 'utf-8').toString('base64');
        encodeState = Buffer.from(sessionId, 'utf-8').toString('base64');
        //hash = md5("f98188a6-88cb-4663-a2b4-46e4335969dc" + ":" + currentDateString + "." + sessionId, "hex");
        queryString = "?tenantid=" + encodeTenantId +
            "&redirecturi=" + encodeRedirectUri +
            "&nonce=" + encodeNonce +
            "&state=" + encodeState; //+
            //"&hash=" + hash;     
     
         url = url + queryString;

         res.redirect(url);
     }
 );
 
 /* sample node js code POST api to decode JwtToken and get user info */
 router.post('/login/callback',
     function (req, res) {
 
 
         // TODO: Recommended Validation
         // 1. check referer
         // 2. check Jwt Token Validity
         // 3. check against state/transactionId stored in system
 
         var token = req.body["token"];
         var parts = token.split("."); // split out the "parts" (header, payload and signature)
 
         const data = parts[1]; // jwt token payload  
         const buff = Buffer.from(data, 'base64');
         const decodedToken = buff.toString('utf-8');
 
         console.log(" ");
         console.log("decodedToken :" + decodedToken);
 
         var jsonObject = JSON.parse(decodedToken);
         req.isAuthenticated = true;
         req.user = {
             userid: jsonObject.userid,
             emailaddress: jsonObject.emailaddress,
             givenname: jsonObject.givenname,
             surname: jsonObject.surname,
             displayname: jsonObject.displayname,
             tenantid: jsonObject.tenantid,
             redirecturi: jsonObject.redirecturi,
             nonce: jsonObject.nonce,
             state: jsonObject.state
         };
 
         // verify token
         //var isVerify = verifyJwtToken(token.toString(), "'NDlhYjVhMWItYjQwYi00MmFkLTlhZTEtOTllYWQ1OTdlZjQ31234567890'");
         //console.log("isVerify: " + isVerify);
 
         var html = '<html><head><title>NodeJs Health Check</title><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="Pragma" content="no-cache" /><meta http-equiv="expires" content="0" /></head><body>';
         html = html + '<h2>NodeJs Authentication Success</h2><br/><br/><b>Token Information:</b><br/>';
         html = html + 'userid: ' + jsonObject.userid + '<br/>';
 
             html = html + 'emailaddress: ' + jsonObject.emailaddress + '<br/>';
             html = html + 'givenname: ' + jsonObject.givenname + '<br/>';
             html = html + 'surname: ' + jsonObject.surname + '<br/>';
             html = html + 'displayname: ' + jsonObject.displayname + '<br/>';
             html = html + 'tenantid: ' + jsonObject.tenantid + '<br/>';
             html = html + 'redirecturi: ' + jsonObject.redirecturi + '<br/>';
             html = html + 'nonce: ' + jsonObject.nonce + '<br/>';
             html = html + 'state: ' + jsonObject.state + '<br/>';
 
         html = html + '</body></html>';
         res.send(html);
     }
 );
 
function verifyJwtToken(signToken, secretOrPublicKey) {
 
     var token = jwt.verify(signToken, secretOrPublicKey); 
     if (token.error) {
         return res.status(422).json({
             errors: result.error
         });
     }
 
    return "JwtToken is valid.";
 
 };
 
 
 module.exports = router;
 