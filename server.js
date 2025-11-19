import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

const LOG_PATH = "./tracking-log.json";

function logEvent(event) {
  let logs = [];
  if (fs.existsSync(LOG_PATH)) logs = JSON.parse(fs.readFileSync(LOG_PATH));
  logs.push(event);
  fs.writeFileSync(LOG_PATH, JSON.stringify(logs, null, 2));
}

app.get("/", (req, res) => {
  const incomingParams = req.query;
  const target = "https://geminicasino.com/?registration=true&promo=FB888";
  const finalURL = target + "&" + new URLSearchParams(incomingParams).toString();

  logEvent({
    type:"landing_loaded",
    timestamp:new Date().toISOString(),
    ip:req.ip,
    userAgent:req.headers["user-agent"],
    referrer:req.headers.referer||"direct",
    incomingParams, finalURL
  });

  res.sendFile(path.join(process.cwd(),"index.html"));
});

app.post("/track", (req,res)=>{
  logEvent({
    type:req.body.event,
    timestamp:new Date().toISOString(),
    ...req.body
  });
  res.json({success:true});
});

app.get("/go",(req,res)=>{
  const incomingParams = req.query;
  const finalTarget =
    "https://geminicasino.com/?registration=true&promo=FB888&" +
    new URLSearchParams(incomingParams).toString();

  logEvent({
    type:"redirect_fired",
    timestamp:new Date().toISOString(),
    incomingParams, finalTarget
  });

  res.redirect(finalTarget);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log("Backend running on",PORT));
