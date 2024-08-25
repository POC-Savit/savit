[![front](https://private-user-images.githubusercontent.com/16266103/361180648-0361b285-ebaa-4131-bc57-9fe1f2c3607f.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQ1NTI0ODgsIm5iZiI6MTcyNDU1MjE4OCwicGF0aCI6Ii8xNjI2NjEwMy8zNjExODA2NDgtMDM2MWIyODUtZWJhYS00MTMxLWJjNTctOWZlMWYyYzM2MDdmLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODI1VDAyMTYyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE5ZGViNDJlODQyM2VhNjg0MGUzNzJmZDE0NTkwODRkM2VlNmQ4OWJiOTAxZjZjY2NiOGMwYmY1ZDhjMTIzOWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Cy2hHV9iM0PK32fG4iwfudJGj1z5ynuf57jqDhK_3rQ)](https://savit.yahoconut.com)

# Savit

| Service URL    | https://savit.yahoconut.com |
| -------------- | --------------------------- |
| Front Source   | [link](/src/)               |
| Backend Source | [link](amplify/)            |

> #### Table of Contents
>
> - [ShowCase](#showcase)
> - [Proect Detail](#project-detail)
> - [Technical Stack](#techinal-stack)
> - [Getting Started](#getting-started)

Financial service that gamifies saving and life cycle financial planning.

## Showcase

<p align="center">
<img src="https://github.com/POC-Savit/savit/blob/main/1.gif" width="40%"></img>
<img src="https://github.com/POC-Savit/savit/blob/main/2.gif" width="40%"></img>
</p>
<p align="center">
<img src="https://private-user-images.githubusercontent.com/17975472/361177832-3e221534-86ac-46c2-b438-3445c16b5a34.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQ1NDU4MzQsIm5iZiI6MTcyNDU0NTUzNCwicGF0aCI6Ii8xNzk3NTQ3Mi8zNjExNzc4MzItM2UyMjE1MzQtODZhYy00NmMyLWI0MzgtMzQ0NWMxNmI1YTM0LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODI1VDAwMjUzNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY3ZTcxZThjMjhkZDA0YWYzNGVlODMwYTQ3ZGNlZWIxYmZkMjc1MjNmYjhjZDJmODBlMzJhMzZiMmJmMzVkY2QmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.QVVo9F0-FCGW78W4E0gencItKRCh-kO-3l0c9JduqcY" width="40%"></img>
<img src="https://private-user-images.githubusercontent.com/17975472/361177849-c88392a6-bbf0-40b4-9911-40a4c6a5954f.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQ1NDU4ODUsIm5iZiI6MTcyNDU0NTU4NSwicGF0aCI6Ii8xNzk3NTQ3Mi8zNjExNzc4NDktYzg4MzkyYTYtYmJmMC00MGI0LTk5MTEtNDBhNGM2YTU5NTRmLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODI1VDAwMjYyNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFlMzJlMWMzYTNjYjg3YWY2ODlkNzIyZTJhYmI1ZjU2ZjFkYWZiN2QxOWQ0MjI4ZjU4NGJmYjA2YjIyNzQ1NjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.udfbf7bbw_JOh-0FaeWvBP9xvtYDCzmjKspQCLBy8bU" width="40%"></img>
</p>

## Project Details

![ourlogo](/_doc/Project%20logo_Savit.png)

Propose a service that improves millennials saving habits and financial knowledge with customizing their own character using in-service money linked to real savings event data, and level-up missions based on life-cycle financial

![12](https://github.com/user-attachments/assets/d50f2d93-d1b7-4177-89e5-97649059ee79)
![14](https://github.com/user-attachments/assets/a51ec520-8db2-4ee2-a1e0-4434c32492af)
![7](https://github.com/user-attachments/assets/57f766c3-e280-40b3-83ed-ff099b0b3d3c)
![8](https://github.com/user-attachments/assets/64e01998-
![9](https://github.com/user-attachments/assets/3ac48b17-0c9d-4e43-9349-83b7d9f02998)
abcb-4f86-8992-d7d7bd101135)

## Technical Stack

![technicalstack](https://private-user-images.githubusercontent.com/16266103/361180567-27363168-10b3-4e5d-8c72-92c2bb7fa99b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQ1NTIyOTUsIm5iZiI6MTcyNDU1MTk5NSwicGF0aCI6Ii8xNjI2NjEwMy8zNjExODA1NjctMjczNjMxNjgtMTBiMy00ZTVkLThjNzItOTJjMmJiN2ZhOTliLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODI1VDAyMTMxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU2OTlhZmEzMmVhYjVhZTQ1MTExMDQ5Zjg2MWNmMzQyZmY0OTJiNmRkMzJiODEzNDY3NDcwZTFiMTYwNDc5ZGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.zhv7i1UrODd_PPbhhBN81BdPfbhLMuu-WPzETK9Vy6k)

## Getting Started

- node version >= 18.20.4

### Frontend

```bash
$ npm intstall
$ npm run dev # Front end 실행
```

### Backend

We build Savit with many components of AWS using Amplify.
so, It's difficult to test on local machine.
try above frontend, It communicate with server on the aws.
