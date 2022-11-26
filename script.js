// first color scheme
const numbers = [10, 26, 45, 56, 78, 88];
const container = document.createElement('div');

document.body.append(container);
function utDiv(){
    for (let num of numbers) {
        const el = document.createElement('div');
        el.style.backgroundColor = `hsl(${num}, 100%, 50%)`;
        el.style.textAlign = 'center'
        container.append(el);
        el.innerText = `rad${num}`
        el.style.fontSize = `${num}px`
        el.style.marginBottom = '20px'
      }  
}
utDiv()

//1th in second scheme
const columnNr = [1,2,3,4,5,6,7,8,9]
const container1 = document.createElement('div')
for( col in columnNr){
    const column = document.createElement('div')
    container1.append(column)
    column.innerText = `${columnNr[col]}`

    if(col % 2 === 0){
        column.style.backgroundColor = 'black'
        column.style.color = 'white'
    }   
    if(col % 6 === 3){
        column.style.backgroundColor = 'purple'
        column.style.color = 'white'
    }
}

document.body.append(container1)
container1.style.width = '50px'
container1.style.border = '10px solid purple'
container1.style.marginRight = '200px'



//2rd in second scheme
const columnN1 = [9,8,7,6,5,4,3,2,1]
const container2 = document.createElement('div')
for( col1 in columnN1){
    const column1 = document.createElement('div')
    container2.append(column1)
    column1.innerText = `${columnN1[col1]}`

    if(col1 % 2 === 0){
        column1.style.backgroundColor = 'black'
        column1.style.color = 'white'
    }  
    if(col1 % 10 === 1){
        column1.style.backgroundColor = 'purple'
        column1.style.color = 'white'
    } 
}
document.body.append(container2)
container2.style.width = '50px'
container2.style.border = '10px solid purple'
container2.style.marginRight = '200px'
container2.style.position = 'relative'
container2.style.left = '500px'
container2.style.top = '-185px'



//3rd in 2nd scheme
const columnN2 = ['ett','två','tre','fyra','fem','sex','sju','åtta','nio']
const container3 = document.createElement('div')
for( col2 in columnN2){
    const column2 = document.createElement('div')
    container3.append(column2)
    column2.innerText = `${columnN2[col2]}`

    if(col2 % 2 === 0){
        column2.style.backgroundColor = 'black'
        column2.style.color = 'white'
    } 
    if(col2 % 10 === 5){
        column2.style.backgroundColor = 'purple'
    
    } 
}
document.body.append(container3)
container3.style.width = '50px'
container3.style.border = '10px solid purple'
container3.style.position = 'relative'
container3.style.left = '1000px'
container3.style.top = '-370px'

