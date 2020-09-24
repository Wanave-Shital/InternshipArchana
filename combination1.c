
#include<stdio.h>
#include<stdlib.h>
#include<string.h>

 
void swap(char*,int);
void gotoloop(char*,int);
 
void main()
{
char *ch;
int i,j,k,l;
ch=(char*)malloc(20);
//clrscr();
printf("Enter the string\n");
gets(ch);
 
l=strlen(ch);
gotoloop(ch,l);
 
return;
}
 
void gotoloop(char *ch,int l)
{
int i,k;
k=l;
 
if(l<=1) 
return;
 
 
for(i=0;i<k;i++)
{
swap(ch,k);
l--;
gotoloop(ch,l);
l++;
if(k==2)
printf("\n%s ",ch);
}
 
}
 
 
void swap(char *ch,int r)
 
{
char c;
int i;
 
c=ch[r-1];
for(i=r-1;i>0;i--)
ch[i]=ch[i-1];
ch[0]=c;
}