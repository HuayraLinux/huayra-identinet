function finalize(start_next_time)
{
	qs = start_next_time ? 'autostart' : 'no_autostart';
	window.location='ui://finalize?'+qs;
}
