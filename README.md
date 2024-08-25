| Service URL    | https://savit.yahoconut.com |
| -------------- | --------------------------- |
| Front Source   | [link](/src/)               |
| Backend Source | [link](amplify/)            |

# Savit

> #### Table of Contents
>
> - [ShowCase](#showcase)
> - [Proect Detail](#project-detail)
> - [MVP](#mvp)
> - [Technical Stack](#technical-stack)
> - [Tech Stack](#tech-stack)
> - [Getting Started](#getting-started)

Financial service that gamifies saving and life cycle financial planning.

## Showcase

<p align="center">
<img src="https://private-user-images.githubusercontent.com/17975472/361177829-ccaba23a-b22f-435c-9c53-b24856ae1e81.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQ1NDU4MzQsIm5iZiI6MTcyNDU0NTUzNCwicGF0aCI6Ii8xNzk3NTQ3Mi8zNjExNzc4MjktY2NhYmEyM2EtYjIyZi00MzVjLTljNTMtYjI0ODU2YWUxZTgxLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODI1VDAwMjUzNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkxYzdkYzNmMzIxNGVmYjM3MzBmYjczM2M3ZDM1MGQzMGFkYjEzMWJmMWRlYThlZDMzMmU2YWU4OTQ3N2Q3MTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0._GFn01DH8GA4iElkrE1vTyGKXc22Qcjnaba6FCElSIM" width="40%"></img>
<img src="https://private-user-images.githubusercontent.com/17975472/361177831-33402af8-c247-42ca-8395-e7569fc7aca4.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQ1NDU4MzQsIm5iZiI6MTcyNDU0NTUzNCwicGF0aCI6Ii8xNzk3NTQ3Mi8zNjExNzc4MzEtMzM0MDJhZjgtYzI0Ny00MmNhLTgzOTUtZTc1NjlmYzdhY2E0LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODI1VDAwMjUzNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTljNDEzMjZhMDcyMDg3NmRiZTY5OGM2NTcxZGQxMjUyNjJmNWNjOGNkNDZlZjNhMWQ5ZWU0NjlmZGM1YTdiMjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.VqJoYygEEpypBdGAN3Weus50Ls7ojTjfCZNOPJHFlWc" width="40%"></img>
</p>
<p align="center">
<img src="https://private-user-images.githubusercontent.com/17975472/361177832-3e221534-86ac-46c2-b438-3445c16b5a34.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQ1NDU4MzQsIm5iZiI6MTcyNDU0NTUzNCwicGF0aCI6Ii8xNzk3NTQ3Mi8zNjExNzc4MzItM2UyMjE1MzQtODZhYy00NmMyLWI0MzgtMzQ0NWMxNmI1YTM0LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODI1VDAwMjUzNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY3ZTcxZThjMjhkZDA0YWYzNGVlODMwYTQ3ZGNlZWIxYmZkMjc1MjNmYjhjZDJmODBlMzJhMzZiMmJmMzVkY2QmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.QVVo9F0-FCGW78W4E0gencItKRCh-kO-3l0c9JduqcY" width="40%"></img>
<img src="https://private-user-images.githubusercontent.com/17975472/361177849-c88392a6-bbf0-40b4-9911-40a4c6a5954f.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQ1NDU4ODUsIm5iZiI6MTcyNDU0NTU4NSwicGF0aCI6Ii8xNzk3NTQ3Mi8zNjExNzc4NDktYzg4MzkyYTYtYmJmMC00MGI0LTk5MTEtNDBhNGM2YTU5NTRmLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODI1VDAwMjYyNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFlMzJlMWMzYTNjYjg3YWY2ODlkNzIyZTJhYmI1ZjU2ZjFkYWZiN2QxOWQ0MjI4ZjU4NGJmYjA2YjIyNzQ1NjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.udfbf7bbw_JOh-0FaeWvBP9xvtYDCzmjKspQCLBy8bU" width="40%"></img>
</p>

## Project Details

![aa](/_doc/Project%20logo_Savit.png)

Propose a service that improves millennials saving habits and financial knowledge with customizing their own character using in-service money linked to real savings event data, and level-up missions based on life-cycle financial planning

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
