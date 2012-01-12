all:
	uglifyjs jquery-download.js > jquery-download.min.js

clean:
	rm jquery-download.min.js
