# javascript-p3-fleamarket

웹풀스택 프로젝트#3 - 중고거래

## ERD

![fleamarket_ERD](https://user-images.githubusercontent.com/49841765/135079251-47d103c2-b077-40f1-8072-a6999629ad04.png)

## API 명세

| PATH      | METHOD | Description                                                                                              |
| --------- | ------ | -------------------------------------------------------------------------------------------------------- |
| /item     | GET    | query string으로 조건을 보내 조건에 알맞은 중고 물건을 얻는다. 이때, 물건에 해당하는 사진도 함께 얻는다. |
| /item     | POST   | user_uid, title, price, contents, category 를 필수 요청 파라미터로 하여 중고 물건을 등록한다.            |
| /item     | PUT    | user_uid, title, price, contents, category를 전체 수정                                                   |
| /item     | DELETE | iid로 식별하여 삭제                                                                                      |
| /chat     | GET    | ITEM_IID, SENDER, RECVER 3가지를 요청 파라미터로 하여 채팅 기록을 얻음                                   |
| /chat     | POST   | 채팅 시 ITEM_IID, SENDER, RECVER, contents를 body로 전달하여 등록한다.                                   |
| /user     | POST   | 회원가입 시 USERNAME을 등록한다.                                                                         |
| /wishlist | GET    | user 정보를 이용하여 해당 유저의 위시리스트를 얻는다.                                                    |
| /wishlist | POST   | 하트를 누르면 해당 유저의 위시리스트를 추가한다.                                                         |
| /wishlist | DELETE | 하트를 다시 누르면 해당 위시리스트를 삭제한다.                                                           |
