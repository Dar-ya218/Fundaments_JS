if [ $# -eq 0 ]; then
echo "No arguments supplied"
exit
fi
for fileName in $@
do
mkdir "ex$fileName"
done
