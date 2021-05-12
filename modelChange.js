function changeTexture()
{
	if(document.getElementById('spritecan__can_texture.jpg').getAttribute("url") === "can_texture.jpg")
	{
		document.getElementById('spritecan__can_texture.jpg').setAttribute("url","coketexture.jpg");
	}else{
		document.getElementById('spritecan__can_texture.jpg').setAttribute("url","can_texture.jpg");
	}
}

function wireframe(id)
{
	var e = document.getElementById(id);
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

function changeMainViewer(id){
	document.getElementById('main-viewer').setAttribute("url",id);
	document.getElementById('main__Line001_TRANSFORM').setAttribute("scale","1 1 1");
}