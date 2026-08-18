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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20027" onclick="CopyToClipboard('tag20027');return false;" class="tag-decoration">v2</div><div id="tag19194" onclick="CopyToClipboard('tag19194');return false;" class="tag-decoration">v2-9ae9357</div><div id="tag4402" onclick="CopyToClipboard('tag4402');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag30273" onclick="CopyToClipboard('tag30273');return false;" class="tag-decoration">v2-v2</div><div id="tag2604" onclick="CopyToClipboard('tag2604');return false;" class="tag-decoration">v2-v2.2</div><div id="tag16965" onclick="CopyToClipboard('tag16965');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/9ae93578d0de04f081e840e4bfbeee518f9a5cd8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147774445" target="_blank">2026-08-18 14:20:50</a></td></tr>
<tr><td><div id="tag8966" onclick="CopyToClipboard('tag8966');return false;" class="tag-decoration">v2-develop</div><div id="tag29894" onclick="CopyToClipboard('tag29894');return false;" class="tag-decoration">v2-develop-15cd483</div><div id="tag23594" onclick="CopyToClipboard('tag23594');return false;" class="tag-decoration">v2-develop-2.2.0-develop.149</div><div id="tag15203" onclick="CopyToClipboard('tag15203');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag24828" onclick="CopyToClipboard('tag24828');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag25401" onclick="CopyToClipboard('tag25401');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/15cd48357a409d6c15aa816848d13170e8b62c81" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147767527" target="_blank">2026-08-18 14:20:46</a></td></tr>
<tr><td><div id="tag16581" onclick="CopyToClipboard('tag16581');return false;" class="tag-decoration">v3</div><div id="tag25490" onclick="CopyToClipboard('tag25490');return false;" class="tag-decoration">v3-70a11f6</div><div id="tag15957" onclick="CopyToClipboard('tag15957');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag27631" onclick="CopyToClipboard('tag27631');return false;" class="tag-decoration">v3-v3</div><div id="tag22361" onclick="CopyToClipboard('tag22361');return false;" class="tag-decoration">v3-v3.3</div><div id="tag14917" onclick="CopyToClipboard('tag14917');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/70a11f68215f03019a2b3cb906ba2e96d4631bf3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147772700" target="_blank">2026-08-18 14:20:50</a></td></tr>
<tr><td><div id="tag5625" onclick="CopyToClipboard('tag5625');return false;" class="tag-decoration">v3-develop</div><div id="tag13949" onclick="CopyToClipboard('tag13949');return false;" class="tag-decoration">v3-develop-cfdbde5</div><div id="tag25789" onclick="CopyToClipboard('tag25789');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1151</div><div id="tag23857" onclick="CopyToClipboard('tag23857');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag1757" onclick="CopyToClipboard('tag1757');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag29033" onclick="CopyToClipboard('tag29033');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/cfdbde5d203630883330e3084bb544eb7e161d45" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32186508000" target="_blank">2026-08-18 21:12:32</a></td></tr>
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
