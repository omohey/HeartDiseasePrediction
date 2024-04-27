import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

// Fields: exercise, gender, age, height, weight, bmi, alcohol consumption, fruit consumption, green vegetable consumption, fried potato consumption, last checkup
function Home() {
  const [checkup, setCheckup] = React.useState("");
  const [age, setAge] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [bmi, setBmi] = React.useState("");
  const [alcohol, setAlcohol] = React.useState("");
  const [fruit, setFruit] = React.useState("");
  const [greenVeg, setGreenVeg] = React.useState("");
  const [friedPotato, setFriedPotato] = React.useState("");
  const [exercise, setExercise] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [smoker, setSmoker] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [snackbarText, setSnackbarText] = React.useState("");
  const [snackbarSeverity, setSnackbarSeverity] = React.useState("success");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [trueHeartDisease, setTrueHeartDisease] = React.useState("");
  const [prediction, setPrediction] = React.useState(null);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleCheckupChange = (event) => {
    setCheckup(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const checkupOptions = [
    { value: 1, label: "Past Year" },
    { value: 2, label: "Past 2 Years" },
    { value: 3, label: "Past 5 Years" },
    { value: 4, label: "More than 5 years ago" },
    { value: 5, label: "Never" },
  ];

  const ageOptions = [
    { value: 1, label: "18-24" },
    { value: 2, label: "25-29" },
    { value: 3, label: "30-34" },
    { value: 4, label: "35-39" },
    { value: 5, label: "40-44" },
    { value: 6, label: "45-49" },
    { value: 7, label: "50-54" },
    { value: 8, label: "55-59" },
    { value: 9, label: "60-64" },
    { value: 10, label: "65-69" },
    { value: 11, label: "70-74" },
    { value: 12, label: "75-79" },
    { value: 13, label: "80+" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    // make sure all fields are filled
    if (
      !age ||
      !height ||
      !weight ||
      !bmi ||
      !alcohol ||
      !fruit ||
      !greenVeg ||
      !friedPotato ||
      !checkup ||
      !exercise ||
      !gender ||
      !smoker
    ) {
      setSnackbarText("Please fill out all fields.");
      setSnackbarSeverity("warning");
      setOpen(true);
      return;
    }

    console.log("Age: ", age);
    console.log("Height: ", height);
    console.log("Weight: ", weight);
    console.log("BMI: ", bmi);
    console.log("Alcohol Consumption: ", alcohol);
    console.log("Fruit Consumption: ", fruit);
    console.log("Green Vegetable Consumption: ", greenVeg);
    console.log("Fried Potato Consumption: ", friedPotato);
    console.log("Last Checkup: ", checkup);
    console.log("Exercise: ", exercise);
    console.log("Gender: ", gender);
    console.log("Smoker: ", smoker);

    // send data to backend
    axios
      .post("http://159.89.97.175:5000/predict", {
        age: age,
        height: height,
        weight: weight,
        bmi: bmi,
        alcohol: alcohol,
        fruit: fruit,
        greenVeg: greenVeg,
        friedPotato: friedPotato,
        checkup: checkup,
        exercise: exercise,
        gender: gender,
        smoker: smoker,
      })
      .then((response) => {
        console.log(response);
        let data = response.data;
        let pred = data.prediction;
        setPrediction(pred);
      })
      .catch((error) => {
        console.log(error);
      });

    setSnackbarText("Form submitted successfully!");
    setSnackbarSeverity("success");
    setOpen(true);
    setDialogOpen(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "background.default",
        flexDirection: "column",
        paddingX: 1,
        paddingY: 5,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        boxShadow={5}
        borderRadius={2}
        padding={5}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "background.paper",
        }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          Disease Prediction
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "background.paper",
            justifyContent: "flex-start",
          }}
        >
          <Grid
            maxWidth={800}
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            {/* <Grid
              item
              xs={12}
              sm={6}
              lg={4}
            >
              <TextField
                fullWidth
                label="Age"
                variant="outlined"
                type="number"
                color="secondary"
                size="small"
                sx={{ marginY: 1 }}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Grid> */}
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
            >
              <TextField
                fullWidth
                label="Height"
                variant="outlined"
                type="number"
                color="secondary"
                size="small"
                sx={{ marginY: 1 }}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
            >
              <TextField
                fullWidth
                label="Weight"
                variant="outlined"
                type="number"
                color="secondary"
                size="small"
                sx={{ marginY: 1 }}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
            >
              <TextField
                fullWidth
                label="BMI"
                variant="outlined"
                type="number"
                color="secondary"
                size="small"
                sx={{ marginY: 1 }}
                value={bmi}
                onChange={(e) => setBmi(e.target.value)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
            >
              <TextField
                fullWidth
                label="Alcohol Consumption"
                variant="outlined"
                type="number"
                color="secondary"
                size="small"
                sx={{ marginY: 1 }}
                helperText="How many drinks do you consume per month?"
                value={alcohol}
                onChange={(e) => setAlcohol(e.target.value)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
            >
              <TextField
                fullWidth
                label="Fruit Consumption"
                variant="outlined"
                type="number"
                color="secondary"
                size="small"
                sx={{ marginY: 1 }}
                helperText="How many servings of fruit do you consume per month?"
                value={fruit}
                onChange={(e) => setFruit(e.target.value)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
            >
              <TextField
                fullWidth
                label="Green Vegetable Consumption"
                variant="outlined"
                type="number"
                color="secondary"
                size="small"
                sx={{ marginY: 1 }}
                helperText="How many servings of green vegetables do you consume per month?"
                value={greenVeg}
                onChange={(e) => setGreenVeg(e.target.value)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
            >
              <TextField
                fullWidth
                label="Fried Potato Consumption"
                variant="outlined"
                type="number"
                color="secondary"
                size="small"
                sx={{ marginY: 1 }}
                helperText="How many servings of fried potatoes do you consume per month?"
                value={friedPotato}
                onChange={(e) => setFriedPotato(e.target.value)}
              />
            </Grid>
          </Grid>

          <FormControl
            fullWidth
            size="small"
            color="secondary"
            sx={{ marginY: 2 }}
          >
            <InputLabel id="age">Age</InputLabel>
            <Select
              labelId="Age"
              id="age"
              value={age}
              label="Age"
              onChange={handleAgeChange}
            >
              {ageOptions.map((option) => (
                <MenuItem
                  key={option.label}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            size="small"
            color="secondary"
            sx={{ marginY: 2 }}
          >
            <InputLabel id="checkup">Checkup</InputLabel>
            <Select
              labelId="Checkup"
              id="checkup"
              value={checkup}
              label="Last Checkup"
              onChange={handleCheckupChange}
            >
              {checkupOptions.map((option) => (
                <MenuItem
                  key={option.label}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            color="secondary"
            sx={{ color: "text.primary", marginY: 1 }}
          >
            <FormLabel id="exercise">Exercise</FormLabel>
            <RadioGroup
              row
              aria-labelledby="exercise"
              name="exercise-radio"
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
            >
              <FormControlLabel
                value={1}
                control={<Radio color="secondary" />}
                label="Yes"
              />
              <FormControlLabel
                value={0}
                control={<Radio color="secondary" />}
                label="No"
              />
            </RadioGroup>
            <Box maxWidth={400}>
              <FormHelperText
                sx={{
                  padding: 0,
                  margin: 0,
                  whiteSpace: "normal",
                }}
              >
                During the past month, other than your regular job, did you
                participate in any physical activities or exercises?
              </FormHelperText>
            </Box>
          </FormControl>
          <FormControl
            color="secondary"
            sx={{ color: "text.primary", marginY: 1 }}
          >
            <FormLabel id="gender">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="gender"
              name="gender-radio"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel
                value={1}
                control={<Radio color="secondary" />}
                label="Female"
              />
              <FormControlLabel
                value={0}
                control={<Radio color="secondary" />}
                label="Male"
              />
            </RadioGroup>
          </FormControl>

          <FormControl
            color="secondary"
            sx={{ color: "text.primary", marginY: 1 }}
          >
            <FormLabel id="smoker">Smoker</FormLabel>
            <RadioGroup
              row
              aria-labelledby="smoker"
              name="smoker-radio"
              value={smoker}
              onChange={(e) => setSmoker(e.target.value)}
            >
              <FormControlLabel
                value={1}
                control={<Radio color="secondary" />}
                label="Yes"
              />
              <FormControlLabel
                value={0}
                control={<Radio color="secondary" />}
                label="No"
              />
            </RadioGroup>
            <FormHelperText
              sx={{
                padding: 0,
                margin: 0,
                whiteSpace: "normal",
                maxWidth: 400,
              }}
            >
              Do you smoke or have a smoking history?
            </FormHelperText>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: "100%" }}
          action={<></>}
        >
          {snackbarText}
        </Alert>
      </Snackbar>

      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();

            if (trueHeartDisease === "") {
              setSnackbarText("Please fill out all fields.");
              setSnackbarSeverity("warning");
              setOpen(true);
              return;
            }

            axios
              .post("http://159.89.97.175:5000/truth", {
                age: age,
                height: height,
                weight: weight,
                bmi: bmi,
                alcohol: alcohol,
                fruit: fruit,
                greenVeg: greenVeg,
                friedPotato: friedPotato,
                checkup: checkup,
                exercise: exercise,
                gender: gender,
                smoker: smoker,
                truth: trueHeartDisease,
              })
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });

            setTrueHeartDisease("");
            setAge("");
            setHeight("");
            setWeight("");
            setBmi("");
            setAlcohol("");
            setFruit("");
            setGreenVeg("");
            setFriedPotato("");
            setCheckup("");
            setExercise("");
            setGender("");
            setSmoker("");
            setPrediction(null);

            setSnackbarText("Thank you for your feedback!");
            setSnackbarSeverity("success");
            setOpen(true);
            handleDialogClose();
          },
        }}
      >
        <DialogTitle>Prediction</DialogTitle>
        <DialogContent>
          <DialogContentText color={"text.primary"}>
            Prediction:{" "}
            {prediction === 1
              ? "Positive"
              : prediction === null
              ? "Loading"
              : "Negative"}
          </DialogContentText>

          <DialogContentText>
            If you already know and would like to help make our data more
            accurate please enter whether or not you have heart disease
          </DialogContentText>
          <FormControl
            color="secondary"
            sx={{ color: "text.primary", marginY: 1 }}
            value={trueHeartDisease}
            onChange={(e) => setTrueHeartDisease(e.target.value)}
          >
            <FormLabel id="heartDisease">Heart Disease</FormLabel>
            <RadioGroup
              row
              aria-labelledby="heartDisease"
              name="heartDisease-radio"
            >
              <FormControlLabel
                value={1}
                control={<Radio color="secondary" />}
                label="Yes"
              />
              <FormControlLabel
                value={0}
                control={<Radio color="secondary" />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDialogClose}
            sx={{ color: "text.secondary" }}
          >
            Close
          </Button>
          <Button
            type="submit"
            sx={{ color: "secondary.dark" }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
export default Home;
