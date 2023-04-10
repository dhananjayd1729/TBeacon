# TBeacon

## If you want to built this project please follow instructions. 
Navigate to your desired folder where you want to built this project.

```
git clone git@github.com:dhananjayd1729/TBeacon.git
```
Install dependencies: This project have dependencies that need to be installed before it can run. You can install the dependencies by navigating to the project directory and running:

```
npm install
```
This assumes that you are using Node.js and have a package.json file in your project directory.

Start the server. You can start the server by running:
```
npm start
```
This assumes that your project has a start script in your package.json file that starts the server. Before starting the server the commented part need to be uncommented and run on your machine so that you can insert the data from csv file to sqlite database.

Open the application: Once the server is running, you can open the backend get api in your web-browser or POSTMAN by navigating to :
```
http://localhost:3000/historical-data
```
That's it! These steps are enough to build and run this project on your local machine.

For backend /get api go on POSTMAN and put params value for each of symbol(NIFTY 50 or NIFTY BANK), from_date and to_date. So basically one of your URL would look like this :
```
localhost:3000/historical-data?symbol=NIFTY 50&from_date=2017-01-02 00:00:00+05:30&to_date=2017-01-30 00:00:00+05:30
```
Now you have get api's endpoints and jsonified data.

For frontend part go from src to views folder and run index.html file.You will have a form which asks for from_date, to_date and symbol where symbol can be 'NIFTY BANK' and 'NIFTY 50'.  
You will see a chart with prices on y axis and dates on x-axis.
```
file://<Your>/<file_Path_to>/<project_directory>/src/views/index.html
```
