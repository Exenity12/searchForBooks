# сделать в консоли "make build"
build:
	docker build -t my-app .

# сделать в консоли "make run"
run: 
	docker run -p 8080:80 my-app

