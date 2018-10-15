variables:
  SSH_DOCUMENT_ROOT: /var/www/vhosts/saunawagon.de/website

production:
  only:
    - master
  script:
    - cd $SSH_DOCUMENT_ROOT
    - rm -rf .
  environment:
      name: production
      url: https://www.saunawagon.de

