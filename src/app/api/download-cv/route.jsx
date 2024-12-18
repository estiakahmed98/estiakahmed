import path from "path";
import fs from "fs";

export default (req, res) => {
  const filePath = path.resolve(".", "public", "cv.pdf"); // Path to your CV

  if (fs.existsSync(filePath)) {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=cv.pdf");
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.status(404).send("CV file not found");
  }
};
