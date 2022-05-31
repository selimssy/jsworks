// 생성자 함수로 book 객체 만들기

function Book(title, author, price){
    this.title = title;
    this.author = author;
    this.price = price;
}


// Book 객체 생성
let web = new Book("반응형 웹", "조혜경", 30000);   // 힙메모리(힙:heap이라는 메모리)에 올라감
console.log(web.title);
let java = new Book("혼자 공부하는 Java", "신자바", 25000);
let spring = new Book("스프링 프레임워크", "spring", 30000);


// 객체 배열로 관리
let bookList = [web, java, spring]


console.log(bookList[0].title)    // 반응형 웹
console.log(bookList[1].title)    // 혼자 공부하는 Java
console.log(bookList[2].title)    // 스프링 프레임워크



// 객체 내 자료 수정하고 싶을 때
bookList[1].author = "신용권";
console.log(bookList[1].author)   // 신용권



// 목록 조회
document.write("<h1>책 제목과 저자</h1>")
for(let i = 0; i < bookList.length; i++){
    document.write(("<p>" + bookList[i].title + " : " + bookList[i].author + "</p>"))
}