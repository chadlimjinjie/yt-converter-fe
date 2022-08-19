import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { Peer } from "peerjs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let navigator: any;
navigator = window.navigator;

export const Meet = () => {

    let { meetingId } = useParams();
    // const [myPeerId, setMyPeerId] = useState<string>("");
    const [remotePeerId, setRemotePeerId] = useState<string>("");

    const peer = new Peer({
        debug: 3,
        config: {
            iceServers: [
                {
                    urls: [
                        'stun:stun1.l.google.com:19302',
                        'stun:stun2.l.google.com:19302',
                    ],
                }]
        }
    });
    var mediaCall: any;

    useEffect(() => {
        
        if (meetingId) {
            setRemotePeerId(meetingId);
        }

        peer.on('open', function () {
            console.log('My PeerJS ID is:', peer.id);
            enableCallAnswer();
        });

    }, [peer.id])

    async function call() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

            const connection = peer.connect(remotePeerId);
            connection.on('error', err => {
                console.error(err);
            });

            mediaCall = peer.call(remotePeerId, stream);

            const localVideo: HTMLVideoElement = document.getElementById('local-video') as HTMLVideoElement;
            localVideo.srcObject = stream;


            mediaCall.on('stream',
                (remoteStream: any) => {
                    // console.log(remoteStream);
                    const remoteVideo: HTMLVideoElement = document.getElementById('remote-video') as HTMLVideoElement;
                    remoteVideo.srcObject = remoteStream;
                });
            mediaCall.on('error', (err: any) => {
                console.error(err);
            });
            mediaCall.on('close', () => {

            });
        } catch (err) {
            console.error(err);
        }
    }

    async function enableCallAnswer() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            const localVideo: HTMLVideoElement = document.getElementById('local-video') as HTMLVideoElement;
            localVideo.srcObject = stream;

            peer.on('call', async (call) => {

                mediaCall = call;
                // isCallStartedBs.next(true);

                mediaCall.answer(stream);
                mediaCall.on('stream', (remoteStream: any) => {
                    const remoteVideo: HTMLVideoElement = document.getElementById('remote-video') as HTMLVideoElement;
                    remoteVideo.srcObject = remoteStream;
                });
                mediaCall.on('error', (err: any) => {
                    console.error(err);
                });
                mediaCall.on('close', () => { });
            });
        }
        catch (ex) {
            console.error(ex);
        }
    }

    return (
        <Box>
            <Box position="relative">
                <Box>
                    <video id="remote-video" className="w-full h-full" poster="data:image/jpeg;base64,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" autoPlay playsInline></video>
                </Box>
                <Box position="absolute" left={0} bottom={0} p="2%" w="20%">
                    <video id="local-video" className="rounded-lg" autoPlay playsInline muted={true}></video>
                </Box>
            </Box>

            <FormControl>
                <FormLabel>Meeting Link</FormLabel>
                <Input value={remotePeerId} onChange={(e) => { setRemotePeerId(e.target.value) }} />
            </FormControl>
            <Button colorScheme='blue' onClick={() => call()}>Call</Button>

        </Box >
    )
}
