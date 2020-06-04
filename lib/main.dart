import 'package:flutter/material.dart';
import 'package:covidapp/home.dart';
import 'package:covidapp/map.dart';
import 'package:covidapp/feed.dart';
import 'package:covidapp/qr.dart';
import 'package:covidapp/login.dart';

void main() {
  runApp(MaterialApp(
      // Title
      title: "Using Tabs",
      // Home
      home: MyHome()));
}

class MyHome extends StatefulWidget {
  @override
  MyHomeState createState() => MyHomeState();
}

// SingleTickerProviderStateMixin is used for animation
class MyHomeState extends State<MyHome> with SingleTickerProviderStateMixin {
  // Create a tab controller
  TabController controller;

  @override
  void initState() {
    super.initState();

    // Initialize the Tab Controller
    controller = TabController(length: 5, vsync: this);
  }

  @override
  void dispose() {
    // Dispose of the Tab Controller
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // Appbar
      appBar: AppBar(
        centerTitle: true,
        // Title
        title: Image.asset('assets/images/DITO_w.png', 
                fit: BoxFit.contain,
                scale: 1.0,
                height: 40,
              ),
        // Set the background color of the App Bar
        backgroundColor: Colors.black87,
      ),
      // Set the TabBar view as the body of the Scaffold
      body: TabBarView(
        physics: NeverScrollableScrollPhysics(),
        // Add tabs as widgets
        children: <Widget>[FirstTab(), SecondTab(), ThirdTab(), FourthTab(), FifthTab()],
        // set the controller
        controller: controller,
      ),
      // Set the bottom navigation bar
      bottomNavigationBar: Material(
        // set the color of the bottom navigation bar
        color: Colors.black87,
        // set the tab bar as the child of bottom navigation bar
        child: TabBar(
          unselectedLabelColor: Colors.grey,
          labelColor: Colors.cyan[600],
          indicatorColor: Colors.cyan[600],
          tabs: <Tab>[
            Tab(
              // set icon to the tab
              icon: Icon(Icons.home),
              text: 'Home',
            ),
            Tab(
              icon: Icon(Icons.near_me),
              text: 'Maps'
            ),
            Tab(
              icon: Icon(Icons.videocam),
              text: 'Live',
            ),
            Tab(
              icon: Icon(Icons.center_focus_strong),
              text: 'Scan',
            ),
            Tab(
              icon: Icon(Icons.portrait),
              text: 'Login',
            )
          ],
          // setup the controller
          controller: controller,
        ),
      ),
    );
  }
}