
/*
dirt, 
grassblocktop, 
stone, 
depthstone, 
bedrock, 
coal, 
iron, 
gold, 
titanium, 
sapphire, 
diamond, 
dcoal, 
diron, 
dgold, 
dtitaniu, 
dsapphire, 
ddiamond, 
depthemerald, 
dadamantine, 
urock, 
uemerald, 
uadamantine, 
logoak, 
leavesoak, 
leavesoakapple, 
planksoak, 
logoakstripped, 
oaksapling, 
sbrick, 
stiles, 
smbrick, 
dbrick, 
dtiles, 
dmbrick, 
ubrick, 
utiles, 
umbrick, 
grassblockside, 
dirtystone, 
snowtop, 
snowside, 
sand, 
sandstone,
emerald,
adamantine,
cutsandstone,
carvedsandstone,
sandstonebrick
*/
//left off at line 612, maybe revert scale changes. also line 21 make scale smaller
import{E as Engine}from"./index.2b3d1184.js";
import{
	C as D,
	T as Texture,
    M as ae,
    V as Me,
    a as re,
    b as H,
    c as Ce,
    d as ve
}from"./babylon.39bd9ef3.js";

const atlas=`data:image/png;base64,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`;
var opts = {
	debug: true,
	showFPS: true,
	chunkSize: 16,
	chunkAddDistance: 5,
	chunkRemoveDistance: 7,
	playerWidth:0.5,
	playerHeight:1.8,
	blockTestDistance:6,
	tickRate:20,
	// See `test` example, or noa docs/source, for more options
}
var noa = new Engine(opts),e=noa;
var permutationTable=[];
for(let i=0;i<256;i++){permutationTable.push(i)}
//perlin by FWJ7 / L16_F51620, normalisation for angleGen3 by GPT 5.4 nano (idk trig lol)
let seedNum = 0;
let blockScale=16;
let heightScaleDiv=256;
let heightScale=8; //heightScaleDiv/heightScale
let caveScale=8;
let caveHeightScaleDiv=4;
let caveHeightScale=3;
const SQRT_HALF=0.70710678118654752;

const gradientTable=[
	[1,0,],
	[-1,0,],
	[0,1],
	[0,-1],
	[SQRT_HALF,SQRT_HALF,],
	[-SQRT_HALF,SQRT_HALF,],
	[SQRT_HALF,-SQRT_HALF,],
	[-SQRT_HALF,-SQRT_HALF,],

];

const gradientTable3=[
	[SQRT_HALF,SQRT_HALF,0],
	[-SQRT_HALF,SQRT_HALF,0],
	[SQRT_HALF,-SQRT_HALF,0],
	[-SQRT_HALF,-SQRT_HALF,0],

	[0,SQRT_HALF,SQRT_HALF,],
	[0,-SQRT_HALF,SQRT_HALF,],
	[0,SQRT_HALF,-SQRT_HALF,],
	[0,-SQRT_HALF,-SQRT_HALF,],

	[SQRT_HALF,0,SQRT_HALF,],
	[SQRT_HALF,0,-SQRT_HALF,],
	[-SQRT_HALF,0,SQRT_HALF,],
	[-SQRT_HALF,0,-SQRT_HALF,],
];
let caveThreshold = 0.77, leniency = 0.066;
const dot = (a,b0,b1) => (a[0]*b0)+(a[1]*b1);
const dot3 = (a,b0,b1,b2) => (a[0]*b0)+(a[1]*b1)+(a[2]*b2);
const fade = x => 6*(x**5) - 15*(x**4) + 10*(x**3);
const lerp = (a, b, n) => a + ((b - a)*n);
const smoothstep=(a,b,n)=>{
	let t = Math.max(0,Math.min(1,(n-a)/(b-a)));
	return 6*(t**5) - 15*(t**4) + 10*(t**3);
}
const rgba_hex=rgba=>{
	let hex="#";
	for(let i of rgba.map(h=>Math.floor(h))){
		let checkedV=i.toString(16);
		if(checkedV.length<2)checkedV=`0${checkedV}`;
		hex=`${hex}${checkedV}`;
	}
	return hex;
}

const generateHash=str=>{
	let hash=2166136261;
	for(let i=0;i<str.length;i++){
		hash^=(str[i].charCodeAt());
		hash = Math.imul(hash,16777619);
	}
	
	return hash;
}

const randomS=s=>{
	s^=(s<<13);
	s^=(s>>>17);
	s^=(s<<5); 
	return ((s>>>0)/4294967295)
}

for(let i=256;i>0;i--){
	let j = Math.floor(randomS(generateHash(`${seedNum}|${i}`))*i);
	[permutationTable[i],permutationTable[j]]=[permutationTable[j],permutationTable[i]];
}


const angleGen = (x, y,seed) => {
	let hash=Math.floor(8*randomS(Math.abs(generateHash(`${x},${y}|${seed??seedNum}`))));
	return gradientTable[hash & 7];
}

const angleGen3 = (x, y, z,seed) => {
	let hash=Math.floor(12*randomS(Math.abs(generateHash(`${x},${y},${z}|${seed??seedNum}`))));
	return gradientTable3[hash % 12];
}

const perlin = (x, y, seed) => {
	
	let x_0 = Math.floor(x), x_1 = x_0+1, y_0 = Math.floor(y), y_1 = y_0+1; 
	let frx=x-x_0;
	let fry=y-y_0;
	let u = fade(frx), v = fade(fry); 
	let s_00 = dot(angleGen(x_0,y_0, seed??seedNum),frx, fry), s_10 = dot(angleGen(x_1,y_0, seed??seedNum),frx-1, fry, seed??seedNum);
	let s_01 = dot(angleGen(x_0,y_1, seed??seedNum),frx, fry-1, seed??seedNum), s_11 = dot(angleGen(x_1,y_1, seed??seedNum),frx-1, fry-1, seed??seedNum); 
	let lx0 = lerp(s_00,s_10,u), lx1 = lerp(s_01,s_11,u); 
	let value = lerp(lx0,lx1,v);
	return value; //[-sqrt(2),sqrt(2)]
}

const perlin3 = (x, y, z, seed) => {
	
	let x_0 = Math.floor(x), x_1 = x_0+1, y_0 = Math.floor(y), y_1 = y_0+1, z_0 = Math.floor(z), z_1 = z_0+1; 
	let frx=x-x_0;
	let fry=y-y_0;
	let frz=z-z_0;
	let u = fade(frx), v = fade(fry), w = fade(frz);
	let s_000 = dot3(angleGen3(x_0,y_0,z_0,seed??seedNum),frx, fry, frz, ), s_100 = dot3(angleGen3(x_1,y_0,z_0,seed??seedNum),frx-1, fry, frz, seed??seedNum);
	let s_010 = dot3(angleGen3(x_0,y_1,z_0,seed??seedNum),frx, fry-1, frz, seed??seedNum), s_110 = dot3(angleGen3(x_1,y_1,z_0,seed??seedNum),frx-1, fry-1, frz, seed??seedNum); 
	let s_001 = dot3(angleGen3(x_0,y_0,z_1,seed??seedNum),frx, fry, frz-1, seed??seedNum), s_101 = dot3(angleGen3(x_1,y_0,z_1,seed??seedNum),frx-1, fry, frz-1, seed??seedNum);
	let s_011 = dot3(angleGen3(x_0,y_1,z_1,seed??seedNum),frx, fry-1, frz-1, seed??seedNum), s_111 = dot3(angleGen3(x_1,y_1,z_1,seed??seedNum),frx-1, fry-1, frz-1, seed??seedNum); 
	let lx0 = lerp(s_000,s_100,u), lx1 = lerp(s_010,s_110,u); 
	let lx2 = lerp(s_001,s_101,u), lx3 = lerp(s_011,s_111,u); 
	let ly0 = lerp(lx0,lx1,v), ly1 = lerp(lx2,lx3,v);
	let value = lerp(ly0,ly1,w);
	return value; //[-sqrt(2),sqrt(2)]
}
const evalPerlinWithFBM_cave=(x,y,z)=>{
	let k=x/caveScale,l=y/caveScale,m=z/caveScale;
	return (perlin3(k/16,l/16,m/16)*(caveHeightScaleDiv/caveHeightScale)/1)
	+(perlin3(k/ 8,l/ 8,m/ 8)*(caveHeightScaleDiv/caveHeightScale)/2)
	+(perlin3(k/ 3,l/ 3,m/ 3)*(caveHeightScaleDiv/caveHeightScale)/4)
	+(perlin3(k/ 1,l/ 1,m/ 1)*(caveHeightScaleDiv/caveHeightScale)/8);
}

const evalPerlinWithFBM_ore=(x,y,z,ore,oreScale,oreHeightScaleDiv,oreHeightScale)=>{
	let k=x/oreScale,l=y/oreScale,m=z/oreScale;
	return (perlin3(k/16,l/4,m/16,`${ore??""}${seedNum}`)*(oreHeightScaleDiv/oreHeightScale)/1)
	+(perlin3(k/ 8,l/ 2,m/ 8,`${ore??""}${seedNum}`)*(oreHeightScaleDiv/oreHeightScale)/2)
	+(perlin3(k/ 4,l/ 1,m/ 4,`${ore??""}${seedNum}`)*(oreHeightScaleDiv/oreHeightScale)/4)
	+(perlin3(k/ 2,l * 2,m/ 2,`${ore??""}${seedNum}`)*(oreHeightScaleDiv/oreHeightScale)/8)
	+(perlin3(k,l * 4,m,`${ore??""}${seedNum}`)*(oreHeightScaleDiv/oreHeightScale)/16);
}

const temperature=(x,z)=>(perlin(x/32,z/32,`temperature${seedNum}`))/Math.sqrt(2);
const hillyness=(x,z)=>((perlin(x/32,z/32,`hillyness${seedNum}`)/Math.sqrt(2))+0.5)
const humidity=(x,z)=>(perlin(x/24,z/24,`humidity${seedNum}`))/Math.sqrt(2);

const shouldBeCaveAir = (x, y, z) => {
	const sx=1,sy=1,sz=1;
	let cV=evalPerlinWithFBM_cave(x*sx,y*sy,z*sz);
	cV+=15/16
	cV/=15/8;
	const t=smoothstep(caveThreshold-leniency,caveThreshold+leniency,cV)
	let k=x/caveScale,l=y/caveScale,m=z/caveScale;
	
	/*let tunnel=perlin3(k/12,l/12,m/12)*((caveHeightScaleDiv/caveHeightScale)/4)
	tunnel+=11/32;
	tunnel*=16/11*/
	return t>0.77/*&&tunnel>0.12;*/
}

/*const shouldBeTest = (x, y, z,oreThreshold,len,th,th2) => {
	const sx=1,sy=1,sz=1;
	let cV=evalPerlinWithFBM_ore(x*sx,y*sy,z*sz,"coal_ore",0.125,1,3);
	cV+=31/32
	cV/=31/16;
	const t=smoothstep(oreThreshold-len,oreThreshold+len,cV)
	return t>th//&&randomS(generateHash(`${x},${y},${z}|${seedNum}|coal_ore`))>0.9
}*/

/*
 *
 *	  Registering voxel types
 * 
 *  Two step process. First you register a material, specifying the 
 *  color/texture/etc. of a given block face, then you register a 
 *  block, which specifies the materials for a given block type.
 * 
*/



const setBlockRect=(x1,y1,z1,x2,y2,z2,b)=>{
	let X=1+(Math.max(x2,x1)-Math.min(x2,x1)),
		Y=1+(Math.max(y2,y1)-Math.min(y2,y1)),
		Z=1+(Math.max(z2,z1)-Math.min(z2,z1));
	for(let I=0;I<X;I++){
		for(let J=0;J<Y;J++){
			for(let K=0;K<Z;K++){
				noa.setBlock(b,x1+I,y1+J,z1+K);
			}
		}
	}
};

const setBlockRectR=(x1,y1,z1,x2,y2,z2,c,b1,b2)=>{
	let X=1+(Math.max(x2,x1)-Math.min(x2,x1)),
		Y=1+(Math.max(y2,y1)-Math.min(y2,y1)),
		Z=1+(Math.max(z2,z1)-Math.min(z2,z1));
	for(let I=0;I<X;I++){
		for(let J=0;J<Y;J++){
			for(let K=0;K<Z;K++){
				let rn=0.5+(generateHash(`${x1+I},${y1+J},${z1+K}|${seedNum}`)/4294967295);
				noa.setBlock(rn<c?b1:b2,x1+I,y1+J,z1+K);
			}
		}
	}
};

const playAudio = src => {
	var audio = new Audio(src);
	audio.play();
}
let queuedBlock=[],qBRequiresUnder=[],queuedBlockConditional=[]
// block materials
let stack256=[
];
let isOre=[
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	21,
	22
]
let isStone=[
	3,
	4,
	20,
]
let gens={
	coal_gen:[-360,120,5,12,8],
	iron_gen:[-360,120,4.5,9,7],
	gold_gen:[-360,-96,4,6,6],
	titanium_gen:[-360,-112,3,5,6],
	sapphire_gen:[-360,-144,3,5,5],
	diamond_gen:[-360,-192,2,4,5],
	emerald_gen:[-512,-288,1.5,3,4],
	adamantine_gen:[-864,-480,1,2,3],
}

const sounds={
	gravel:[1,2,48,49,50,51,60,61],
	stone:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,39,40,41,42,43,44,45,46,47,53,54,55,56,57,58,59],
	wood:[32,35,36],
	foliage:[33,34,37,38],
	sand:[52]
}

// [blockID,x,y,z]


const genFunc=(x,y,z,oreS,genName)=>{
	let oreN=ID_TO_BLOCK[oreS];
	let genInfo=gens[genName],genAmt=genInfo[3];
	for(let I=0;I<genAmt;I++){
		let sr1=(Math.round(randomS(generateHash(`${x},${y},${z}|${seedNum}|${oreN}|${I}xu`)))-0.5)*2,
			sr2=(Math.round(randomS(generateHash(`${x},${y},${z}|${seedNum}|${oreN}|${I}zu`)))-0.5)*2;
		let r1=Math.round(sr1*(randomS(generateHash(`${x},${y},${z}|${seedNum}|${oreN}|${I}x`)))*Math.ceil(Math.sqrt(genInfo[4]))),
			r2=sr2*(randomS(generateHash(`${x},${y},${z}|${seedNum}|${oreN}|${I}z`)))*Math.ceil(Math.sqrt(genInfo[4]));
		if(isStone.includes(noa.getBlock(x+r1,y,z+r2)))queuedBlock.push([oreS,x+r1,y,z+r2]);
	}
	if(isStone.includes(noa.getBlock(x,y,z)))queuedBlock.push([oreS,x,y,z]);
}
// l=Logs,f=Foliage,r=fRuit
const treeGen=[
	(x,y,z,s,l,f,r)=>{
		//length = 6-8
		let logHeight = 6+(Math.abs(generateHash(`${x},${y},${z}|${seedNum}|${s}`))%3);
		setBlockRectR(x-3,y+(logHeight-2),z-1,x+3,y+(logHeight+2),z+1,0.05,r,f);
		setBlockRectR(x-2,y+(logHeight-3),z-1,x+2,y+(logHeight+3),z+1,0.05,r,f);

		setBlockRectR(x-2,y+(logHeight-1),z-2,x+2,y+(logHeight+1),z-2,0.05,r,f);
		setBlockRectR(x-1,y+(logHeight-2),z-2,x+1,y+(logHeight+2),z-2,0.05,r,f);

		setBlockRectR(x-2,y+(logHeight-1),z+2,x+2,y+(logHeight+1),z+2,0.05,r,f);
		setBlockRectR(x-1,y+(logHeight-2),z+2,x+1,y+(logHeight+2),z+2,0.05,r,f);

		setBlockRectR(x-1,y+(logHeight-1),z-3,x+1,y+(logHeight+1),z-3,0.05,r,f);
		setBlockRectR(x-1,y+(logHeight-1),z+3,x+1,y+(logHeight+1),z+3,0.05,r,f);
		setBlockRect(x,y,z,x,y+(logHeight-1),z,l);
	}
]

const checkStoneT=(x,y,z,r3,r2,r1)=>{
	return y<(-480 + (generateHash(`${x},${y},${z}|${seedNum}|underworld_rock`)%3) )?r3:
	y<(-192 + (generateHash(`${x},${y},${z}|${seedNum}|depthstone`)%3) )?r2:
	r1;
}

noa.registry.registerMaterial('dirt', {textureURL:atlas,atlasIndex:0});
noa.registry.registerMaterial('grass_block_top', {textureURL:atlas,atlasIndex:1});
noa.registry.registerMaterial('grass_block_side',{textureURL:atlas,atlasIndex:2});
noa.registry.registerMaterial('stone', {textureURL:atlas,atlasIndex:3,texHasAlpha:!0}); //stone
noa.registry.registerMaterial('depthstone', {textureURL:atlas,atlasIndex:4}); //darker stone
noa.registry.registerMaterial('bedrock', {textureURL:atlas,atlasIndex:5});

noa.registry.registerMaterial('coal_ore', {textureURL:atlas,atlasIndex:6});
noa.registry.registerMaterial('iron_ore', {textureURL:atlas,atlasIndex:7});
noa.registry.registerMaterial('gold_ore', {textureURL:atlas,atlasIndex:8});
noa.registry.registerMaterial('titanium_ore', {textureURL:atlas,atlasIndex:9});
noa.registry.registerMaterial('sapphire_ore', {textureURL:atlas,atlasIndex:10});
noa.registry.registerMaterial('diamond_ore', {textureURL:atlas,atlasIndex:11});

noa.registry.registerMaterial('depthstone_coal_ore', {textureURL:atlas,atlasIndex:14});
noa.registry.registerMaterial('depthstone_iron_ore', {textureURL:atlas,atlasIndex:15});
noa.registry.registerMaterial('depthstone_gold_ore', {textureURL:atlas,atlasIndex:16});
noa.registry.registerMaterial('depthstone_titanium_ore', {textureURL:atlas,atlasIndex:17});
noa.registry.registerMaterial('depthstone_sapphire_ore', {textureURL:atlas,atlasIndex:18});
noa.registry.registerMaterial('depthstone_diamond_ore', {textureURL:atlas,atlasIndex:19});
noa.registry.registerMaterial('depthstone_emerald_ore', {textureURL:atlas,atlasIndex:20});
noa.registry.registerMaterial('depthstone_adamantine_ore', {textureURL:atlas,atlasIndex:21});

noa.registry.registerMaterial('underworld_rock', {textureURL:atlas,atlasIndex:22});
noa.registry.registerMaterial('underworld_emerald_ore', {textureURL:atlas,atlasIndex:23});
noa.registry.registerMaterial('underworld_adamantine_ore', {textureURL:atlas,atlasIndex:24});

noa.registry.registerMaterial('coal_gen', {textureURL:atlas,atlasIndex:6});
noa.registry.registerMaterial('iron_gen', {textureURL:atlas,atlasIndex:7});
noa.registry.registerMaterial('gold_gen', {textureURL:atlas,atlasIndex:8});
noa.registry.registerMaterial('titanium_gen', {textureURL:atlas,atlasIndex:9});
noa.registry.registerMaterial('sapphire_gen', {textureURL:atlas,atlasIndex:10});
noa.registry.registerMaterial('diamond_gen', {textureURL:atlas,atlasIndex:11});
noa.registry.registerMaterial('emerald_gen', {textureURL:atlas,atlasIndex:12});
noa.registry.registerMaterial('adamantine_gen', {textureURL:atlas,atlasIndex:13});

noa.registry.registerMaterial('water', {color:[0.5,0.75,1,0.5]});

noa.registry.registerMaterial('log_oak_side', {textureURL:atlas,atlasIndex:25});
noa.registry.registerMaterial('log_oak_top', {textureURL:atlas,atlasIndex:26});
noa.registry.registerMaterial('leaves_oak', {textureURL:atlas,atlasIndex:27});
noa.registry.registerMaterial('leaves_oak_apple', {textureURL:atlas,atlasIndex:28});
noa.registry.registerMaterial('planks_oak', {textureURL:atlas,atlasIndex:29});
noa.registry.registerMaterial('log_oak_stripped_side', {textureURL:atlas,atlasIndex:30});
noa.registry.registerMaterial('log_oak_stripped_top', {textureURL:atlas,atlasIndex:31});
noa.registry.registerMaterial('sapling_oak', {textureURL:atlas,atlasIndex:32});

noa.registry.registerMaterial('stone_brick', {textureURL:atlas,atlasIndex:33});
noa.registry.registerMaterial('stone_tiles', {textureURL:atlas,atlasIndex:34});
noa.registry.registerMaterial('mini_stone_bricks', {textureURL:atlas,atlasIndex:35});
noa.registry.registerMaterial('depthstone_brick', {textureURL:atlas,atlasIndex:36});
noa.registry.registerMaterial('depthstone_tiles', {textureURL:atlas,atlasIndex:37});
noa.registry.registerMaterial('mini_depthstone_bricks', {textureURL:atlas,atlasIndex:38});
noa.registry.registerMaterial('underworld_brick', {textureURL:atlas,atlasIndex:39});
noa.registry.registerMaterial('underworld_tiles', {textureURL:atlas,atlasIndex:40});
noa.registry.registerMaterial('mini_underworld_bricks', {textureURL:atlas,atlasIndex:41});
noa.registry.registerMaterial('dirty_stone',{textureURL:atlas,atlasIndex:42})
noa.registry.registerMaterial('snow_top',{textureURL:atlas,atlasIndex:43})
noa.registry.registerMaterial('snow_side',{textureURL:atlas,atlasIndex:44})
noa.registry.registerMaterial('sand',{textureURL:atlas,atlasIndex:45})
noa.registry.registerMaterial('sandstone',{textureURL:atlas,atlasIndex:46})
noa.registry.registerMaterial('sandstone_smooth',{textureURL:atlas,atlasIndex:47})
noa.registry.registerMaterial('sandstone_cut',{textureURL:atlas,atlasIndex:48})
noa.registry.registerMaterial('sandstone_carved',{textureURL:atlas,atlasIndex:49})
noa.registry.registerMaterial('sandstone_brick',{textureURL:atlas,atlasIndex:50})
noa.registry.registerMaterial('sandstone_tiles',{textureURL:atlas,atlasIndex:51})
noa.registry.registerMaterial('mini_sandstone_bricks',{textureURL:atlas,atlasIndex:52})
noa.registry.registerMaterial('jungle_grass_block_top',{textureURL:atlas,atlasIndex:53})
noa.registry.registerMaterial('jungle_grass_block_side',{textureURL:atlas,atlasIndex:54})
//noa.registry.registerMaterial(name, {textureURL?: string, color?: number[]})
const BLOCK_TO_ID={
	air:0,
	"dirt":1,
	"grass_block_full":2,
	"stone":3,
	"depthstone":4,
	"bedrock":5,
	"coal_ore":noa.registry.registerBlock(6, {material: 'coal_ore'}),
	"iron_ore":noa.registry.registerBlock(7, {material: 'iron_ore'}),
	"gold_ore":noa.registry.registerBlock(8, {material: 'gold_ore'}),
	"titanium_ore":noa.registry.registerBlock(9, {material: 'titanium_ore'}),
	"sapphire_ore":noa.registry.registerBlock(10, {material: 'sapphire_ore'}),
	"diamond_ore":noa.registry.registerBlock(11, {material: 'diamond_ore'}),
	"depthstone_coal_ore":noa.registry.registerBlock(12, {material: 'depthstone_coal_ore'}),
	"depthstone_iron_ore":noa.registry.registerBlock(13, {material: 'depthstone_iron_ore'}),
	"depthstone_gold_ore":noa.registry.registerBlock(14, {material: 'depthstone_gold_ore'}),
	"depthstone_titanium_ore":noa.registry.registerBlock(15, {material: 'depthstone_titanium_ore'}),
	"depthstone_sapphire_ore":noa.registry.registerBlock(16, {material: 'depthstone_sapphire_ore'}),
	"depthstone_diamond_ore":noa.registry.registerBlock(17, {material: 'depthstone_diamond_ore'}),
	"depthstone_emerald_ore":noa.registry.registerBlock(18, {material: 'depthstone_emerald_ore'}),
	"depthstone_adamantine_ore":noa.registry.registerBlock(19, {material: 'depthstone_adamantine_ore'}),
	"underworld_rock":20,
	"underworld_emerald_ore":noa.registry.registerBlock(21, {material: 'underworld_emerald_ore'}),
	"underworld_adamantine_ore":noa.registry.registerBlock(22, {material: 'underworld_adamantine_ore'}),
	"coal_gen": noa.registry.registerBlock(23, {
		material: 'coal_gen',
		onSet: (x,y,z)=>{
			return genFunc(x,y,z,checkStoneT(x,y,z,20,12,6),"coal_gen");
		},
		onLoad: (x,y,z)=>{
			return genFunc(x,y,z,checkStoneT(x,y,z,20,12,6),"coal_gen");
		},
	}),
	"iron_gen": noa.registry.registerBlock(24, {
		material: 'iron_gen',
		onSet: (x,y,z)=>{
			return genFunc(x,y,z,checkStoneT(x,y,z,20,13,7),"iron_gen");
		},
		onLoad: (x,y,z)=>{
			return genFunc(x,y,z,checkStoneT(x,y,z,20,13,7),"iron_gen");
		},
	}),
	"gold_gen": noa.registry.registerBlock(25, {
		material: 'gold_gen',
		onSet: (x,y,z)=>{
			return genFunc(x,y,z,checkStoneT(x,y,z,20,14,8),"gold_gen");
		},
		onLoad: (x,y,z)=>{
			return genFunc(x,y,z,checkStoneT(x,y,z,20,14,8),"gold_gen");
		},
	}),
	"titanium_gen": noa.registry.registerBlock(26, {
		material: 'titanium_gen',
		onSet: (x,y,z)=>{
			return genFunc(x,y,z,checkStoneT(x,y,z,20,15,9),"titanium_gen");
		},
		onLoad: (x,y,z)=>{
			return genFunc(x,y,z,checkStoneT(x,y,z,20,15,9),"titanium_gen");
		},
	}),
	"sapphire_gen": noa.registry.registerBlock(27, {
		material: 'sapphire_gen',

		onSet: (x,y,z)=>{
			return genFunc(x,y,z,checkStoneT(x,y,z,20,16,10),"sapphire_gen");
		},
		onLoad: (x,y,z)=>{
			return genFunc(x,y,z,checkStoneT(x,y,z,20,16,10),"sapphire_gen");
		},
	}),
	"diamond_gen": noa.registry.registerBlock(28, {
		material: 'diamond_gen',
		onSet: (x,y,z)=>{
			return genFunc(x,y,z,checkStoneT(x,y,z,20,17,11),"diamond_gen");
		},
		onLoad: (x,y,z)=>{
			return genFunc(x,y,z,checkStoneT(x,y,z,20,17,11),"diamond_gen");
		},
	}),
	"emerald_gen": noa.registry.registerBlock(29, {
		material: 'emerald_gen',
		onSet: (x,y,z)=>{
			return genFunc(x,y,z,checkStoneT(x,y,z,21,18,3),"emerald_gen");
		},
		onLoad: (x,y,z)=>{
			return genFunc(x,y,z,checkStoneT(x,y,z,21,18,3),"emerald_gen");
		},
	}),
	"adamantine_gen": noa.registry.registerBlock(30, {
		material: 'adamantine_gen',
		onSet: (x,y,z)=>{
			return genFunc(x,y,z,checkStoneT(x,y,z,22,19,3),"adamantine_gen");
		},
		onLoad: (x,y,z)=>{
			return genFunc(x,y,z,checkStoneT(x,y,z,22,19,3),"adamantine_gen");
		},
	}),
	"water":31,
	"log_oak":32,
	"leaves_oak":33,
	"leaves_oak_apple":34,
	"planks_oak": noa.registry.registerBlock(35, {material: 'planks_oak'}),
	"log_oak_stripped": noa.registry.registerBlock(36, {material: ['log_oak_stripped_top','log_oak_stripped_side']}),
	"sapling_oak": noa.registry.registerBlock(37, {
		material: 'sapling_oak',
		onSet: (x,y,z)=>{
			return
		},
		onLoad: (x,y,z)=>{
			return
		},
	}),
	"sapling_oak_auto_gen":38,
	"stone_brick":noa.registry.registerBlock(39, {material: 'stone_brick'}),
	"stone_tiles":noa.registry.registerBlock(40, {material: 'stone_tiles'}),
	"mini_stone_bricks":noa.registry.registerBlock(41, {material: 'mini_stone_bricks'}),
	"depthstone_brick":noa.registry.registerBlock(42, {material: 'depthstone_brick'}),
	"depthstone_tiles":noa.registry.registerBlock(43, {material: 'depthstone_tiles'}),
	"mini_depthstone_bricks":noa.registry.registerBlock(44, {material: 'mini_depthstone_bricks'}),
	"underworld_brick":noa.registry.registerBlock(45, {material: 'underworld_brick'}),
	"underworld_tiles":noa.registry.registerBlock(46, {material: 'underworld_tiles'}),
	"mini_underworld_bricks":noa.registry.registerBlock(47, {material: 'mini_underworld_bricks'}),
	"grass_block_half":48,
    "dirty_stone":49,
    "snow_full":50,
	"snow_half":51,
	"sand":52,
	"sandstone":53,
	"sandstone_smooth":noa.registry.registerBlock(54, {material: 'sandstone_smooth'}),
	"sandstone_cut":noa.registry.registerBlock(55, {material: 'sandstone_cut'}),
	"sandstone_carved":noa.registry.registerBlock(56, {material: 'sandstone_carved'}),
	"sandstone_brick":noa.registry.registerBlock(57, {material: 'sandstone_brick'}),
	"sandstone_tiles":noa.registry.registerBlock(58, {material: 'sandstone_tiles'}),
	"mini_sandstone_bricks":noa.registry.registerBlock(59, {material: 'mini_sandstone_bricks'}),
	"jungle_grass_block_full":60,
	"jungle_grass_block_half":61,
};

const BlockMD={
	1:{
		audio:"gravel",
	},
	2:{
		audio:"gravel",
	},
	3:{
		audio:"stone",
	},
	4:{
		audio:"stone",
	},
}
const Blocks=Object.keys(BLOCK_TO_ID),BIds=Object.values(BLOCK_TO_ID);
let ID_TO_BLOCK=[
	"air",
	...Blocks
];
// block types and their material names
var dirtID = noa.registry.registerBlock(1, {material: 'dirt'})
var grass_block_fullID = noa.registry.registerBlock(2, {material: 'grass_block_top'})
var stoneID = noa.registry.registerBlock(3, {material: 'stone',opaque:!1})
var depthstoneID = noa.registry.registerBlock(4, {material: 'depthstone'})
var bedrockID = noa.registry.registerBlock(5, {material: 'bedrock'})
var underworld_rockID = noa.registry.registerBlock(20, {material: 'underworld_rock'})

let gei={
	"coal_gen":[20,12,6],
	"iron_gen":[20,13,7],
	"gold_gen":[20,14,8],
	"titanium_gen":[20,15,9],
	"sapphire_gen":[20,16,10],
	"diamond_gen":[20,17,11],
	"emerald_gen":[21,18,3],
	"adamantine_gen":[22,19,3],
};



var waterID=noa.registry.registerBlock(31,{material:"water",fluid:!0,fluidDensity:0.67});

var log_oakID = noa.registry.registerBlock(32, {material: ['log_oak_top','log_oak_side']});
var leaves_oakID = noa.registry.registerBlock(33, {material: 'leaves_oak'});
var leaves_oak_appleID = noa.registry.registerBlock(34, {material: 'leaves_oak_apple'});

var sapling_oak_auto_genID = noa.registry.registerBlock(38, {
	material: 'sapling_oak_auto_gen',
	onSet: (x,y,z)=>{
		return treeGen[0](x,y,z,"sapling_oak",log_oakID,leaves_oakID,leaves_oak_appleID)
	},
	onLoad: (x,y,z)=>{
		return treeGen[0](x,y,z,"sapling_oak",log_oakID,leaves_oakID,leaves_oak_appleID)
	},
});

var grass_block_halfID = noa.registry.registerBlock(48, {material: ['grass_block_top','dirt','grass_block_side']});
var dirty_stoneID = noa.registry.registerBlock(49, {material: 'dirty_stone'});
var snow_fullID = noa.registry.registerBlock(50, {material: 'snow_top'});
var snow_halfID = noa.registry.registerBlock(51, {material: ["snow_top","dirt",'snow_side']});
var sandID = noa.registry.registerBlock(52, {material: 'sand'});
var sandstoneID = noa.registry.registerBlock(53, {material: 'sandstone'});

var jungle_grass_block_fullID = noa.registry.registerBlock(60, {material: "jungle_grass_block_top"});
var jungle_grass_block_halfID = noa.registry.registerBlock(61, {material: ['jungle_grass_block_top','dirt','jungle_grass_block_side']});
const playBlockSound=blockID=>{
	if(sounds.gravel.includes(blockID)){playAudio(`../hello-world/sounds/gravel${Math.ceil(Math.random()*6)}.mp3`)}
	if(sounds.stone.includes(blockID)){playAudio(`../hello-world/sounds/stone${Math.ceil(Math.random()*6)}.mp3`)}
	if(sounds.wood.includes(blockID)){playAudio(`../hello-world/sounds/wood${Math.ceil(Math.random()*6)}.mp3`)}
}
var nameToDisplayNameOverrides={
	"grass_block_full":"Grass Block (Full)",
	"leaves_oak_apple":"Oak Leaves With Apple",
	"log_oak_stripped":"Oak Log (Stripped)",
	"grass_block_half":"Grass Block (Half)",
	"snow_full":"Snow Block (Full)",
	"snow_half":"Snow Block (Half)",
	"jungle_grass_block_full":"Jungle Grass Block (Full)",
	"jungle_grass_block_half":"Jungle Grass Block (Half)",
}

const nameToDisplayName=n=>{
	if(n in nameToDisplayNameOverrides)return nameToDisplayNameOverrides[n];
	return n.toUpperCase().replaceAll(/ /g,"");
}
//noa.registry.registerMaterial(blockID, opts)



/*
 * 
 *	  World generation
 * 
 *  The world is divided into chunks, and `noa` will emit an 
 *  `worldDataNeeded` event for each chunk of data it needs.
 *  The game client should catch this, and call 
 *  `noa.world.setChunkData` whenever the world data is ready.
 *  (The latter can be done asynchronously.)
 * 
*/

// "simple" height map worldgen function
function getVoxelID(x, y, z,height,data) {
	let amount = Math.round(height);
	let dx=x&15,dy=y&15,dz=z&15;
	if (y < -864) return 0;
	if (y === -864) return bedrockID;
	if(shouldBeCaveAir(x,y,z)&&y<amount)return 0;
	//console.log(data.get(dx,dy,dz), isStone);
	//if(shouldBeTest(x,y,z,0.7,0.012,0.709)&&(y<amount-6&&y<=144))return BLOCK_TO_ID["coal_ore"];
	if(y>=amount&&y>=-3)return 0;
	let getTemp=temperature(x/blockScale,z/blockScale),getHumid=humidity(x/blockScale,z/blockScale);
	let variationTemp=(0.0036*randomS(generateHash(`${x},${y},${z}|tempvar`)))-0.0018
	let variationHumid=(0.0036*randomS(generateHash(`${x},${y},${z}|tempvar`)))-0.0018
	let Ybm0=
		getTemp>0.16 + variationTemp
		? (
			getHumid > 0.16 + variationHumid
			? jungle_grass_block_fullID
			: sandID
		)
		:   getTemp < -0.16 + variationTemp
			? snow_fullID 
			: grass_block_fullID;
	let Ybm1=
		getTemp > 0.16 + variationTemp
		? (
			getHumid > 0.16 + variationHumid
			? jungle_grass_block_halfID
			: sandID
		)
		:   getTemp < -0.16 + variationTemp
			? snow_halfID
			: grass_block_halfID;
	let Ybm2 = 
		getTemp > 0.16 + variationTemp
		? (
			getHumid > 0.16 + variationHumid
			? dirtID
			: sandID
		)
		:   y > 64
			? dirty_stoneID
			: dirtID;
	let Ybm6 = 
		getTemp > 0.16 + variationTemp
		? (
			getHumid > 0.16 + variationHumid
			? stoneID
			: sandstoneID
		)
		: stoneID;
	for(let I of Object.keys(gens)){
		let J = gens[I]; // [min, max, chancePerBlock]
		let oreI=I.replaceAll(/gen/g,"ore");
		if(y<amount-6){
			if(Math.abs(generateHash(`${x},${y},${z}|${seedNum}|${I}`))%16384<=J[2]*4&&(y>=J[0]&&y<=J[1])){
				/*return y<(-256 + (generateHash(`${x},${y},${z}|${seedNum}|underworld_stone`)%3) )?BLOCK_TO_ID[`underworld_stone_${I}`]:
				y<(-128 + (generateHash(`${x},${y},${z}|${seedNum}|depthstone`)%3) )?BLOCK_TO_ID[`depthstone_${I}`]:
				BLOCK_TO_ID[I];*/
				return genFunc(x,y,z,checkStoneT(x,y,z,...gei[I]),I);
			};
		}
	}
	let under=data.get(dx,dy-1,dz);
	if (y < -480 + (generateHash(`${x},${y},${z}|${seedNum}|underworld_rock`)%3))return underworld_rockID;
	if (y < -192 + (generateHash(`${x},${y},${z}|${seedNum}|depthstone`)%3))return depthstoneID
	
	if (y < amount-21) return y>104?snow_fullID:stoneID;
	if (y < amount-6) return y>104?snow_fullID:Ybm6;
	if (y < amount-2) return y>104?snow_fullID:y>80?stoneID:Ybm2
	if (y < amount-1) return y>104?snow_fullID:y>80?stoneID:y>-3?Ybm1:Ybm2;
	if (y < amount) return y>104?snow_fullID:y>80?stoneID:y>-3?Ybm0:y===-3?sandID:Ybm2;
	if (y >= amount && y < -3 )return waterID;
	let treeX=Math.round(randomS(generateHash(`${Math.floor(x/16)},${Math.floor(y/16)},${Math.floor(z/16)}|sapling_oak,x`))*8);
	let treeZ=Math.round(randomS(generateHash(`${Math.floor(x/16)},${Math.floor(y/16)},${Math.floor(z/16)}|sapling_oak,z`))*8);
	if(y<amount+1&&Math.floor(x/16)+treeX===x&&Math.floor(z/16)+treeZ===z&&under!==0)return sapling_oak_auto_genID;
	
	return /*dirty_stoneID*/0;// signifying empty space
	//Dirty Stone is for when debugging.
}
let fbm=1.5;
// register for world events
noa.world.on('worldDataNeeded', function (id, data, x, y, z) {
	//console.log(data.get(0,0,0))
	// `id` - a unique string id for the chunk
	// `data` - an `ndarray` of voxel ID data (see: https://github.com/scijs/ndarray)
	// `x, y, z` - world coords of the corner of the chunk
	for (var i = 0; i < data.shape[0]; i++) {
		for (var k = 0; k < data.shape[2]; k++) {
			let l=(x+i)/blockScale;
			let m=(z+k)/blockScale;
			let getHilly=hillyness(l,m);
			let heightMult=1;
			if(getHilly>0.65){
				heightMult=1+(30*(getHilly-0.65));
			}
			let height=((perlin(l/64,m/64)*(heightScaleDiv/heightScale))
			+(perlin(l/32,m/32)*(heightScaleDiv/heightScale)/1.5)
			+(perlin(l/16,m/16)*(heightScaleDiv/heightScale)/(fbm**2))
			+(perlin(l/8,m/8)*(heightScaleDiv/heightScale)/(fbm**3))
			+(perlin(l/4,m/4)*(heightScaleDiv/heightScale)/(fbm**4))
			+(perlin(l/2,m/2)*(heightScaleDiv/heightScale)/(fbm**5))
			+(perlin(l/1,m/1)*(heightScaleDiv/heightScale)/(fbm**6)))*heightMult;
			for (var j = 0; j < data.shape[1]; j++) {
				var voxelID = getVoxelID(x + i, y + j, z + k,height,data);
				/*
				var voxelName=ID_TO_BLOCK[voxelID];
				if(Object.keys(gens).includes(voxelName)){
					let oreID=checkStoneT(x+i,y+j,z+k,...gei[voxelName]);
					let oreN=ID_TO_BLOCK[oreID];
					let genAmt=gens[voxelName][3];
					for(let I=0;I<genAmt;I++){
						let r1=(generateHash(`${x},${y},${z}|${seedNum}|${oreN}|${I}x`))%5,
							r2=(generateHash(`${x},${y},${z}|${seedNum}|${oreN}|${I}z`))%5;
						if(isStone.includes(noa.getBlock(x+i+r1,y+j,z+k+r2)))noa.setBlock(oreID,x+i+r1,y+j,z+k+r2);
					}
					return data.set(i,j,k,oreID);
					//genFunc(x+i,y+j,z+k,checkStoneT(x+i,y+j,z+k,...gei[voxelName]),voxelName);
				}*/
				data.set(i, j, k, voxelID);
			}
		}
	}
	// tell noa the chunk's terrain data is now set
	noa.world.setChunkData(id, data)
});

/*
background-color:/#f25058aa/#555a;
      color:#eeeeee;
      border:5px solid /#ee2f45/#222;
*/
const resetSlotOutline=z=>{
	for(let j=0;j<10;j++){
		let itemCSS=document.getElementById(`item`+j).style;
		itemCSS["background-color"]="#555a";
		itemCSS["color"]="#eee";
		itemCSS["border-color"]="#222";
	}
}
const visualSSlot=z=>{
	let itemCSS=document.getElementById(`item`+z).style;
	itemCSS["background-color"]="#f25058aa";
	itemCSS["border-color"]="#ee2f45";
}
let altKey=!1;
var itemI=[
	["item0","item-c0","imgitem0"],
	["item1","item-c1","imgitem1"],
	["item2","item-c2","imgitem2"],
	["item3","item-c3","imgitem3"],
	["item4","item-c4","imgitem4"],
	["item5","item-c5","imgitem5"],
	["item6","item-c6","imgitem6"],
	["item7","item-c7","imgitem7"],
	["item8","item-c8","imgitem8"],
	["item9","item-c9","imgitem9"],
];
let playerInventory=[
	{name:"dirt",amount:1,attributes:{}},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
]
const checkSlotsForCItem=(i,a)=>playerInventory.findIndex(j=>i?.name===j&&i?.amount<256);
const getSlotsForCItem=(i,a)=>playerInventory.filter(j=>i?.name===j&&i?.amount<256);
const giveItem=(i,a)=>{
	let given=0;
	let pC=playerInventory;
	for(let c=0;c<pC.length;c++){
		if(pC[c].name!==i)continue;
		if(a-given<=0)break;
		let ogAmt=pC[c].amount;
		let isEmpty=Object.keys(pC[c]).length<=0;
		let slotID=checkSlotsForCItem(i,a);
		let amtLeft=a-given,amtToGive=amtLeft;
		let fah=b[c],amtCanFill=256-fah.amount;
		if(isEmpty){let amtToGive=Math.min(256,a-given);pC[c]={name:i,amount:amtToGive,attributes:{}};given+=amtToGive;continue;}		
		
		if(amtCanFill-amtToGive<0)amtToGive=amtCanFill;
		pC[c]={name:i,amount:amtToGive+ogAmt,attributes:{}};
		given+=amtToGive;
	}
	playerInventory=pC;
	return pC;
}
let selectedHotbarSlotI=0;
let accScroll=0;
let holdFire=!1;
let holdAltFire=!1;
let holdShift=!1;
let lastFire=performance.now();
let lastAltFire=performance.now();
let lastSFire=performance.now();
let lastSAltFire=performance.now();
var g=e.playerEntity,m=e.entities.getPositionData(g),fm=noa.entities.getPhysicsBody(g),d=m.width,f=m.height,z=e.rendering.getScene(),a=D("player-mesh",{},z);var move = e.entities.getMovement(g);
move.maxSpeed = 7.24824;move.running=!0;move.jumpImpulse=640/81;move.jumpTime=0;move.airJumps=0;
fm.friction=0.5;
move.standingFriction=0.96;
//move.runningFriction=0.99;
a.scaling.x=d;a.scaling.z=d;a.scaling.y=f;
a.material=e.rendering.makeStandardMaterial();e.entities.addComponent(g,e.entities.names.mesh,{mesh:a,offset:[0,f/2,0]});

noa.inputs.down.on('fire', function () {
	lastFire=performance.now();
	
	holdFire=!0;
})
noa.inputs.up.on("fire",()=>{
	holdFire=!1;
})
noa.inputs.bind('fire', 'KeyJ')
var pickedID=1;
var toggleCheck=!0;
// place some grass on right click
noa.inputs.down.on('mid-fire', function () {
	if (noa.targetedBlock) {
		pickedID=noa.targetedBlock.blockID;
	}
})
noa.inputs.bind('mid-fire', 'KeyK')

noa.inputs.bind('zoom-out-on', 'KeyX')
noa.inputs.down.on('zoom-out-on', function () {
	altKey=!0;
})

noa.inputs.up.on('zoom-out-on', function () {
	altKey=!1;
})

noa.inputs.down.on('alt-fire', function () {
	lastAltFire=performance.now();
	
	holdAltFire=!0;
	
})

noa.inputs.up.on("alt-fire",()=>{
	holdAltFire=!1;
	
})

// add a key binding for "E" to do the same as alt-fire
noa.inputs.bind('alt-fire', 'KeyE')

noa.inputs.bind('log-coords', 'KeyC')
noa.inputs.down.on('log-coords', function () {
	console.log(noa.entities.getPosition(g),fm.velocity)
})

noa.inputs.bind("previous-block","KeyU");
noa.inputs.bind("next-block","KeyO");
noa.inputs.down.on('previous-block', function () {
	pickedID=Math.max(1,pickedID-1)
})
noa.inputs.down.on('next-block', function () {
	pickedID=Math.min(Object.keys(BLOCK_TO_ID).length,pickedID+1);
})
noa.inputs.bind("log-physics-body","KeyL");
noa.inputs.down.on("log-physics-body",()=>{
	console.log(noa.entities.getPhysicsBody(g).friction)
})
noa.inputs.bind("toggle-check-place","KeyQ");
noa.inputs.down.on("toggle-check-place",()=>{
	toggleCheck=!toggleCheck;
})


noa.inputs.bind("test1","KeyG");
noa.inputs.down.on("test1",()=>{
	playerInventory=giveItem("Dirt",256);
	console.log(playerInventory);
})

noa.inputs.bind("test2","KeyH");
noa.inputs.down.on("test2",()=>{
	playerInventory=giveItem("Dirt",9999);
	console.log(playerInventory);
})

noa.inputs.bind("test3","KeyY");
noa.inputs.down.on("test3",()=>{
	playerInventory=giveItem("Dirt",3);
	console.log(playerInventory);
})

noa.inputs.bind("mounts","KeyM");
noa.inputs.down.on("mounts",()=>{
	let poh=noa.entities.getPosition(g);
	console.log(poh);
	noa.entities.setPosition(g,poh[0]*2,20,809);
})

noa.inputs.bind("jungle","KeyN");
noa.inputs.down.on("jungle",()=>{
	noa.entities.setPosition(g,-861,20,-534);
})

noa.inputs.bind("minus","KeyB");
noa.inputs.down.on("minus",()=>{
	/*let poh=noa.entities.getPosition(g);
	console.log(poh);
	noa.entities.setPosition(g,poh[0]*2,20,809);*/
})

noa.inputs.bind("plus","KeyN");
noa.inputs.down.on("plus",()=>{
	/*let poh=noa.entities.getPosition(g);
	console.log(poh);
	noa.entities.setPosition(g,poh[0]*2,20,809);*/
})

noa.inputs.bind("fling","KeyF");
noa.inputs.down.on("fling",()=>{
	fm.applyImpulse([0,15,0]);
})
noa.inputs.bind("shift","Shift");
noa.inputs.down.on("shift",()=>{
	console.log("I'm holding shift!");
})
// each tick, consume any scroll events and use them to zoom camera
noa.on('tick', function (dt) {
	let vel=fm.velocity,speed=Math.sqrt(vel[0]**2 + vel[2]**2);
	let displayCoords=noa.entities.getPosition(g).map(i=>`/ ${Math.round(i*1e2)/1e2} `).join("").slice(1);
	let [px,py,pz]=noa.entities.getPosition(g).map(i=>Math.floor(i));
	let displayVel=``;
	let getHilly=hillyness(px/blockScale,pz/blockScale),getTemp=temperature(px/blockScale,pz/blockScale),getHumid=humidity(px/blockScale,pz/blockScale);
	fm.velocity.forEach(i => displayVel+=`/ ${Math.round(i*1e4)/1e4} `);
	displayVel=displayVel.slice(1);
	/*Coordinates: X/Y/Z ${displayCoords}
	<br>Vel: X/Y/Z ${displayVel}<br>Speed: ${speed} b/s
	*/
	document.getElementById("debug-seed").innerHTML=`Seed ${seedNum}`;
	document.getElementById("debug-coords").innerHTML=`${displayCoords}`;
	document.getElementById("debug-vel").innerHTML=`${displayVel}`;
	document.getElementById("debug-speed").innerHTML=`${Math.round(speed*1e4)/1e4} b/s`;
	document.getElementById("debug-temperature").innerHTML=`TMP: ${Math.round(getTemp*1e4)/1e4}`;
	document.getElementById("debug-hillyness").innerHTML=`HIL: ${Math.round(getHilly*1e4)/1e4}`;
	document.getElementById("debug-humidity").innerHTML=`HMD: ${Math.round(getHumid*1e4)/1e4}`;
	
	if(queuedBlock.length>0){
		for(let i=0;i<64;i++){
			if(queuedBlock.length<1)return;
			let queuedBlock0=queuedBlock[0];
			noa.setBlock(...queuedBlock0);
			queuedBlock.splice(0,1);
		}
	}
	if(queuedBlockConditional.length>0){
		for(let i=0;i<16;i++){
			if(queuedBlockConditional.length<1)return;
			let qBC0=queuedBlockConditional[0];
			noa.setBlock(qBC0[0](...qBC0[3])?qBC0[1](...qBC0[3]):qBC0[2](...qBC0[3]),...qBC0[3]);
			queuedBlockConditional.splice(0,1);
		}
	}
	
	var scroll = noa.inputs.pointerState.scrolly
	if (scroll !== 0) {
		selectedHotbarSlotI=(selectedHotbarSlotI+((scroll > 0) ? 1 : -1))%10;
		/*accScroll+=scroll;*/
		if(selectedHotbarSlotI<0)selectedHotbarSlotI=9;
		if(altKey){
			noa.camera.zoomDistance += (scroll > 0) ? 1 : -1
			if (noa.camera.zoomDistance < 0) noa.camera.zoomDistance = 0
			if (noa.camera.zoomDistance > 10) noa.camera.zoomDistance = 10
		}
	}
	/*
	while(accScroll>200){
		accScroll-=200;
		selectedHotbarSlotI++;
		selectedHotbarSlotI=selectedHotbarSlotI%10;
		if(selectedHotbarSlotI<0)selectedHotbarSlotI=9;
	}*/
	for(let i=0;i<itemI.length;i++){
		let j=itemI[i];
		document.getElementById(j[2]).src=`../hello-world/textures/${playerInventory[i]?.name||"air"}.png`
	}
	if(holdFire){
		let fireCooldown=250-Math.min((performance.now()-lastFire)/10,200);
		if(performance.now()-lastSFire>fireCooldown){
			if (noa.targetedBlock) {
				var pos = noa.targetedBlock.position
				var targetedBlockID=noa.targetedBlock.blockID;
				playBlockSound(targetedBlockID);
				noa.setBlock(0, pos[0], pos[1], pos[2])
			}
			lastSFire=performance.now();
		}
	}
	if(holdAltFire){
		let altFireCooldown=250-Math.min((performance.now()-lastAltFire)/10,200);
		if(performance.now()-lastSAltFire>altFireCooldown){
			if (noa.targetedBlock) {
				var pos = noa.targetedBlock.adjacent
				
				if(toggleCheck){
					if(!noa.entities.isTerrainBlocked(pos[0], pos[1], pos[2])){
						playBlockSound(pickedID);
					}
				}else{
					playBlockSound(pickedID);
				}
				noa[toggleCheck?"addBlock":"setBlock"](pickedID, pos[0], pos[1], pos[2]);
				
			}
			lastSAltFire=performance.now();
			
		}
	}
	
	console.log(`selected hotbar slot is ${selectedHotbarSlotI}, scroll is ${scroll}`)
	resetSlotOutline();
	visualSSlot(selectedHotbarSlotI);
})
