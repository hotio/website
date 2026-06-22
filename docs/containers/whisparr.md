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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1916" onclick="CopyToClipboard('tag1916');return false;" class="tag-decoration">v2</div><div id="tag26380" onclick="CopyToClipboard('tag26380');return false;" class="tag-decoration">v2-a514428</div><div id="tag5583" onclick="CopyToClipboard('tag5583');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag10484" onclick="CopyToClipboard('tag10484');return false;" class="tag-decoration">v2-v2</div><div id="tag10180" onclick="CopyToClipboard('tag10180');return false;" class="tag-decoration">v2-v2.2</div><div id="tag12372" onclick="CopyToClipboard('tag12372');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/a514428a53cc1c33b0acbc573e101f6122bb5afb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27988390033" target="_blank">2026-06-22 22:29:49</a></td></tr>
<tr><td><div id="tag18640" onclick="CopyToClipboard('tag18640');return false;" class="tag-decoration">v2-develop</div><div id="tag5834" onclick="CopyToClipboard('tag5834');return false;" class="tag-decoration">v2-develop-322bc44</div><div id="tag25121" onclick="CopyToClipboard('tag25121');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag28201" onclick="CopyToClipboard('tag28201');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag31575" onclick="CopyToClipboard('tag31575');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag24855" onclick="CopyToClipboard('tag24855');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/322bc44ff71a8e085afa10304311c49f7122b3db" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27988392736" target="_blank">2026-06-22 22:29:54</a></td></tr>
<tr><td><div id="tag20593" onclick="CopyToClipboard('tag20593');return false;" class="tag-decoration">v3</div><div id="tag11051" onclick="CopyToClipboard('tag11051');return false;" class="tag-decoration">v3-46bca41</div><div id="tag7399" onclick="CopyToClipboard('tag7399');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag7205" onclick="CopyToClipboard('tag7205');return false;" class="tag-decoration">v3-v3</div><div id="tag18007" onclick="CopyToClipboard('tag18007');return false;" class="tag-decoration">v3-v3.3</div><div id="tag30565" onclick="CopyToClipboard('tag30565');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/46bca41437faab2d4029371735993e26ac5e11f9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27988389852" target="_blank">2026-06-22 22:29:49</a></td></tr>
<tr><td><div id="tag2680" onclick="CopyToClipboard('tag2680');return false;" class="tag-decoration">v3-develop</div><div id="tag9993" onclick="CopyToClipboard('tag9993');return false;" class="tag-decoration">v3-develop-ae6a42f</div><div id="tag32273" onclick="CopyToClipboard('tag32273');return false;" class="tag-decoration">v3-develop-3.3.4-develop.796</div><div id="tag11925" onclick="CopyToClipboard('tag11925');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag9113" onclick="CopyToClipboard('tag9113');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag12971" onclick="CopyToClipboard('tag12971');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ae6a42fba39aac0bedc5e0465c99cae139c6d811" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27917390930" target="_blank">2026-06-21 21:02:48</a></td></tr>
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
