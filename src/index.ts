import * as express from "express";
const app: express.Application = express();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
})