---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28870" onclick="CopyToClipboard('tag28870');return false;" class="tag-decoration">v2</div><div id="tag29566" onclick="CopyToClipboard('tag29566');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag14799" onclick="CopyToClipboard('tag14799');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag6413" onclick="CopyToClipboard('tag6413');return false;" class="tag-decoration">v2-v2</div><div id="tag19707" onclick="CopyToClipboard('tag19707');return false;" class="tag-decoration">v2-v2.2</div><div id="tag1362" onclick="CopyToClipboard('tag1362');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag23424" onclick="CopyToClipboard('tag23424');return false;" class="tag-decoration">v2-develop</div><div id="tag13284" onclick="CopyToClipboard('tag13284');return false;" class="tag-decoration">v2-develop-ae98421</div><div id="tag31948" onclick="CopyToClipboard('tag31948');return false;" class="tag-decoration">v2-develop-2.2.0-develop.175</div><div id="tag28345" onclick="CopyToClipboard('tag28345');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag12964" onclick="CopyToClipboard('tag12964');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag8077" onclick="CopyToClipboard('tag8077');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ae98421067801fad1dab9aff93fe86b0828c8660" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32883296386" target="_blank">2026-08-25 18:21:38</a></td></tr>
<tr><td><div id="tag3139" onclick="CopyToClipboard('tag3139');return false;" class="tag-decoration">v3</div><div id="tag22815" onclick="CopyToClipboard('tag22815');return false;" class="tag-decoration">v3-edb7863</div><div id="tag11880" onclick="CopyToClipboard('tag11880');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag16569" onclick="CopyToClipboard('tag16569');return false;" class="tag-decoration">v3-v3</div><div id="tag22070" onclick="CopyToClipboard('tag22070');return false;" class="tag-decoration">v3-v3.3</div><div id="tag18114" onclick="CopyToClipboard('tag18114');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag10839" onclick="CopyToClipboard('tag10839');return false;" class="tag-decoration">v3-develop</div><div id="tag2740" onclick="CopyToClipboard('tag2740');return false;" class="tag-decoration">v3-develop-c03b173</div><div id="tag7837" onclick="CopyToClipboard('tag7837');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1270</div><div id="tag8034" onclick="CopyToClipboard('tag8034');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag28927" onclick="CopyToClipboard('tag28927');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag16433" onclick="CopyToClipboard('tag16433');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c03b173d40b33604e09520e061306e7cf17004ca" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32677111008" target="_blank">2026-08-24 00:34:43</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
