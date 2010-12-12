Date.prototype.adjust = function(yr,mn,dy,hr,mi,se) {
	var m,t;
	this.setYear(this.getFullYear() + yr);
	m = this.getMonth() + mn;
	if(m !== 0) { this.setYear(this.getFullYear() + Math.floor(m/12)); }
	if(m < 0) {
		this.setMonth(12 + (m%12));	
	} else if(m > 0) {
		this.setMonth(m%12);
	}
	t = this.getTime();
	t += (dy * 86400000);
	t += (hr * 3600000);
	t += (mi * 60000);
	t += (se * 1000);
	this.setTime(t);
}