import { useEffect, useState } from 'react'
import { Audio } from 'expo-av'

export type AudioState = {
	recording?: Audio.Recording
	uri?: string
	amplitude?: number
}

export const useMicrophone = () => {
	const [state, setState] = useState<AudioState>({})

	useEffect(() => {
		Audio.requestPermissionsAsync()
		Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true })
	}, [])

	const startRecording = async () => {
		if (!state.recording) {
			Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true })
			const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY)
			recording.setOnRecordingStatusUpdate(status => {
				setState(prev => ({ ...prev, amplitude: status.metering }))
			})
			setState({ recording, uri: undefined })
		}
	}

	const stopRecording = async () => {
		if (state.recording) {
			await state.recording.stopAndUnloadAsync()
			await Audio.setAudioModeAsync({ allowsRecordingIOS: false })
			const uri = state.recording?.getURI()!
			setState({ uri, recording: undefined })
		}
	}

	return {
		startRecording,
		stopRecording,
		audioRecording: state.uri,
		isRecording: !!state.recording,
		amplitude: state.amplitude
	}
}
