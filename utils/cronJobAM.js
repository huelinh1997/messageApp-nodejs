const CronJob = require('cron').CronJob;
const axios = require('axios');

const job = new CronJob({
	cronTime: '00 30 11 * * 1-5',
	onTick: function () {
		axios({
			method: 'POST',
			url: 'https://slack.com/api/chat.postMessage',
			headers: {
				Authorization: `Bearer xoxp-104161267380-104161267412-370943879012-ddc679d2e78dbc71ff92ed5c98d19895`,
			},
			data: {
				channel: 'UFPSJUCTU',
				text: 'Test messagger 11h30 AM',
				as_user: true,
			},
		});
	},
	timeZone: 'Asia/Ho_Chi_Minh',
});

job.start();
