import 'package:flutter/material.dart';
import 'package:chewie/chewie.dart';
import 'package:video_player/video_player.dart';

class ThirdTab extends StatefulWidget {
    _ThirdTabState createState() => _ThirdTabState();
}

class _ThirdTabState extends State<ThirdTab> {
  
  VideoPlayerController _streetController;
  VideoPlayerController _shoppingController;

  TargetPlatform _platform;
  ChewieController _chewieController;

  @override
  void initState() {
    super.initState();
    _streetController = VideoPlayerController.asset('assets/videos/street.mp4');
    _shoppingController = VideoPlayerController.asset('assets/video/shopping.mp4');
    _chewieController = ChewieController(
      videoPlayerController: _streetController,
      aspectRatio: 3 / 2,
      autoPlay: true,
      looping: true,
      // Try playing around with some of these other options:

      // showControls: false,
      // materialProgressColors: ChewieProgressColors(
      //   playedColor: Colors.red,
      //   handleColor: Colors.blue,
      //   backgroundColor: Colors.grey,
      //   bufferedColor: Colors.lightGreen,
      // ),
      // placeholder: Container(
      //   color: Colors.grey,
      // ),
      // autoInitialize: true,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white70,
      body: Column(
          children: <Widget>[
            Expanded(
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Container(
                      padding: EdgeInsets.only(top: 12,),
                      child: Container(
                        width: 250,
                        margin: EdgeInsets.only(top: 15, bottom: 15),
                        decoration: BoxDecoration(
                          color: Colors.cyan[800],
                          shape: BoxShape.rectangle,
                          borderRadius: BorderRadius.all(Radius.circular(50))
                        ),
                        child: Padding(
                          padding: EdgeInsets.all(15),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: <Widget>[
                              Icon(Icons.videocam, size: 20, color: Colors.white),
                              Text('  Streetcam Sample AI',
                                  style: TextStyle(fontSize: 16, fontFamily: 'Poppins', fontWeight: FontWeight.w700, color: Colors.white)
                                  ),
                            ],
                          )
                        )
                      ),
                    ),
                    Chewie(
                      controller: _chewieController,
                    ),
                  ],
                )
              ),
            ),
          ],
        ),
    );
  }

  @override
  void dispose() {
    super.dispose();
    _streetController.dispose();
    _shoppingController.dispose();
    _chewieController.dispose();
  }

}

/**void createVideo() {
  if (playerController == null) {
    playerController = VideoPlayerController.asset('assets/videos/street.mp4')
    .. addListener(listener)
    .. setVolume(1.0)
    .. initialize()
    .. play();
  } else {
    if (playerController.value.isPlaying) {
      playerController.pause();
    } else {
      playerController.initialize();
      playerController.play();
    }
  }
}**/