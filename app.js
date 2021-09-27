const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sassMiddleware = require("node-sass-middleware");
const models = require("./models/index");
models.sequelize
    .sync()
    .then(() => {
        console.log("success db connect");
    })
    .catch((err) => {
        console.log(err);
    });

const pageRouter = require("./resources/page/index");
const itemRouter = require("./resources/item/index");
const chatRouter = require("./resources/chat/index");
const userRouter = require("./resources/user/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    sassMiddleware({
        src: path.join(__dirname, "public"),
        dest: path.join(__dirname, "public"),
        indentedSyntax: true, // true = .sass and false = .scss
        sourceMap: true,
    })
);
app.use(express.static(path.join(__dirname, "./assets")));

app.use("/", pageRouter);
app.use("/item", itemRouter);
app.use("/chat", chatRouter);
app.use("/user", userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error.html");
});

module.exports = app;
