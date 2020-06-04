import 'package:flutter/material.dart';
import 'package:newsapi_client/newsapi_client.dart';

class News {

  final client = NewsapiClient('ce35c279ec6445fb924b2a31a681f951');

  // Get the latest business headlines.
  Future<Map<String, dynamic>> topBusiness() async {
    final response = await client.request(TopHeadlines(
      category: Categories.business,
    ));
    return response;
  }

  // Get all articles with keyword: Microsoft from 2019-02-01 to now.
  Future<Map<String, dynamic>> everythingMicrosoft() async {
    final response = await client.request(Everything(
      query: 'Microsoft',
      from: DateTime.parse('2019-02-01'),
      to: DateTime.now(),
    ));
    return response;
  }
  // Get all norwegian sources.
  Future<Map<String, dynamic>> philippineSources() async {
    final response = await client.request(Sources(
      country: Countries.philippines,
    ));
    return response;
  }

}

class FirstTab extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white70,
      body: ListView(
        scrollDirection: Axis.vertical,
        children: <Widget>[
        Container(
          padding: EdgeInsets.all(12.0),
          height: 50,
          child: Text('COVID-19 in Local News', style: TextStyle(fontSize: 24, fontFamily: 'Poppins', fontWeight: FontWeight.w600)),
        ),
        Container(
          padding: EdgeInsets.only(left: 12.0,),
          height: 50,
          child: Row(
            children: <Widget>[
              Icon(Icons.location_city, color: Colors.cyan[800]),
              Text(" Manila, PHL", style: TextStyle(color: Colors.cyan[800], fontSize: 17 ,fontFamily: 'Poppins', fontWeight: FontWeight.w800))
            ]
          ) 
        ),
        Container(
          padding: EdgeInsets.all(12.0),
          height: 500,
          child: Card(
            elevation: 5,
            margin: EdgeInsets.zero,
            child: Column(
              children: <Widget>[
                Flexible(
                  child: Column(
                  children: <Widget>[
                    Container(
                      width: double.infinity,
                      height: 200,
                      decoration: BoxDecoration(
                        image: DecorationImage(
                          image: AssetImage('assets/images/covid-aljazeera.jpg'),
                          fit: BoxFit.fitWidth,
                        )
                      )
                    ),
                    Container(
                      padding: EdgeInsets.all(8.0),
                      child: 
                        const ListTile(
                          leading: Icon(Icons.error_outline, color:Colors.amber),
                          title: Text('PH coronavirus cases now at 18,638', style: TextStyle(fontSize: 19, fontFamily: 'Poppins', fontWeight: FontWeight.w600)),
                          subtitle: Text(
                            'The Department of Health (DOH) announced that the number of coronavirus cases in the country climbed further to 18,638 on Monday, June 1.',
                            style: TextStyle(fontSize: 15, fontFamily: 'Poppins', fontWeight: FontWeight.w600),
                            textAlign: TextAlign.justify,
                          ),
                      ),
                    ),
                    ButtonTheme(
                      minWidth: 300,
                      height: 50,
                      child: RaisedButton(
                        child: const Text('Read More', style: TextStyle(fontSize: 18,color: Colors.white, fontFamily: 'Poppins',)),
                        onPressed: () {/* ... */},
                        color: Colors.cyan[800],
                      ),
                    ),
                  ])
                ),
              ],
            ),
          ),
        ),
        Container(
          padding: EdgeInsets.all(12.0),
          height: 580,
          child: Card(
            elevation: 5,
            margin: EdgeInsets.zero,
            child: Column(
              children: <Widget>[
                Flexible(
                  child: Column(
                  children: <Widget>[
                    Container(
                      width: double.infinity,
                      height: 200,
                      decoration: BoxDecoration(
                        image: DecorationImage(
                          image: AssetImage('assets/images/covid-jeep.jpg'),
                          fit: BoxFit.fitWidth,
                        )
                      )
                    ),
                    Container(
                      padding: EdgeInsets.all(8.0),
                      child: 
                        const ListTile(
                          leading: Icon(Icons.error_outline, color:Colors.amber),
                          title: Text('Coronavirus highlights Manila’s overcrowding as Philippine government offers to pay residents to leave', style: TextStyle(fontSize: 19, fontFamily: 'Poppins', fontWeight: FontWeight.w600)),
                          subtitle: Text(
                            'Duterte is offering cash and goods to induce city dwellers to move out of the greater capital region in an ambitious programme called “Back to the Province”',
                            style: TextStyle(fontSize: 15, fontFamily: 'Poppins', fontWeight: FontWeight.w600),
                            textAlign: TextAlign.justify,
                          ),
                      ),
                    ),
                    ButtonTheme(
                      minWidth: 300,
                      height: 50,
                      child: RaisedButton(
                        child: const Text('Read More', style: TextStyle(fontSize: 18,color: Colors.white, fontFamily: 'Poppins',)),
                        onPressed: () {/* ... */},
                        color: Colors.cyan[800],
                      ),
                    ),
                  ])
                ),
              ],
            ),
          ),
        ),
        ],
      ),
    );
  }
}

