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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30421" onclick="CopyToClipboard('tag30421');return false;" class="tag-decoration">v2</div><div id="tag27036" onclick="CopyToClipboard('tag27036');return false;" class="tag-decoration">v2-3f5ac2a</div><div id="tag6381" onclick="CopyToClipboard('tag6381');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag10785" onclick="CopyToClipboard('tag10785');return false;" class="tag-decoration">v2-v2</div><div id="tag2143" onclick="CopyToClipboard('tag2143');return false;" class="tag-decoration">v2-v2.2</div><div id="tag24775" onclick="CopyToClipboard('tag24775');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3f5ac2a7a7d1d8938d8f7decfb8ea2b089a2c2b0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382138754" target="_blank">2026-07-28 17:16:17</a></td></tr>
<tr><td><div id="tag20416" onclick="CopyToClipboard('tag20416');return false;" class="tag-decoration">v2-develop</div><div id="tag20973" onclick="CopyToClipboard('tag20973');return false;" class="tag-decoration">v2-develop-8ec4964</div><div id="tag3533" onclick="CopyToClipboard('tag3533');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag865" onclick="CopyToClipboard('tag865');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag12459" onclick="CopyToClipboard('tag12459');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag4357" onclick="CopyToClipboard('tag4357');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8ec49643200d855c4b302b73c88392f7853bfa7c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31876513938" target="_blank">2026-08-15 09:14:59</a></td></tr>
<tr><td><div id="tag14026" onclick="CopyToClipboard('tag14026');return false;" class="tag-decoration">v3</div><div id="tag21733" onclick="CopyToClipboard('tag21733');return false;" class="tag-decoration">v3-cd735a5</div><div id="tag32406" onclick="CopyToClipboard('tag32406');return false;" class="tag-decoration">v3-3.3.7-release.979</div><div id="tag2073" onclick="CopyToClipboard('tag2073');return false;" class="tag-decoration">v3-v3</div><div id="tag1940" onclick="CopyToClipboard('tag1940');return false;" class="tag-decoration">v3-v3.3</div><div id="tag20210" onclick="CopyToClipboard('tag20210');return false;" class="tag-decoration">v3-v3.3.7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cd735a57cf515ba3f596f08b5b39a9c0725cffc3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382151601" target="_blank">2026-07-28 17:16:25</a></td></tr>
<tr><td><div id="tag29390" onclick="CopyToClipboard('tag29390');return false;" class="tag-decoration">v3-develop</div><div id="tag16112" onclick="CopyToClipboard('tag16112');return false;" class="tag-decoration">v3-develop-7ff892a</div><div id="tag27801" onclick="CopyToClipboard('tag27801');return false;" class="tag-decoration">v3-develop-3.3.8-develop.1092</div><div id="tag14032" onclick="CopyToClipboard('tag14032');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag26168" onclick="CopyToClipboard('tag26168');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag21285" onclick="CopyToClipboard('tag21285');return false;" class="tag-decoration">v3-develop-v3.3.8</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/7ff892abace653c6f20462b7b33666ca206d77cb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31858327640" target="_blank">2026-08-15 02:06:40</a></td></tr>
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
