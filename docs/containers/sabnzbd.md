---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag30787" onclick="CopyToClipboard('tag30787');return false;" class="tag-decoration">nightly</div><div id="tag953" onclick="CopyToClipboard('tag953');return false;" class="tag-decoration">nightly-4840cdd</div><div id="tag1087" onclick="CopyToClipboard('tag1087');return false;" class="tag-decoration">nightly-0fe92487b62f6550874e5a1adfb4711046594d1c</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/4840cdd4b2db778221841fb271dc9af3415d1d85" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32699237949" target="_blank">2026-08-24 06:54:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7678" onclick="CopyToClipboard('tag7678');return false;" class="tag-decoration">release</div><div id="tag6715" onclick="CopyToClipboard('tag6715');return false;" class="tag-decoration">release-a5cc15e</div><div id="tag6580" onclick="CopyToClipboard('tag6580');return false;" class="tag-decoration">release-5.1.1</div><div id="tag1295" onclick="CopyToClipboard('tag1295');return false;" class="tag-decoration">release-v5</div><div id="tag31329" onclick="CopyToClipboard('tag31329');return false;" class="tag-decoration">release-v5.1</div><div id="tag11239" onclick="CopyToClipboard('tag11239');return false;" class="tag-decoration">release-v5.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a5cc15e20c8afb8fa435dc7d82c514d53d8db142" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32380904002" target="_blank">2026-08-20 14:34:01</a></td></tr>
<tr><td><div id="tag32080" onclick="CopyToClipboard('tag32080');return false;" class="tag-decoration">testing</div><div id="tag22782" onclick="CopyToClipboard('tag22782');return false;" class="tag-decoration">testing-f806ed8</div><div id="tag18631" onclick="CopyToClipboard('tag18631');return false;" class="tag-decoration">testing-5.1.1</div><div id="tag27264" onclick="CopyToClipboard('tag27264');return false;" class="tag-decoration">testing-v5</div><div id="tag982" onclick="CopyToClipboard('tag982');return false;" class="tag-decoration">testing-v5.1</div><div id="tag1905" onclick="CopyToClipboard('tag1905');return false;" class="tag-decoration">testing-v5.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f806ed8c7c8bfadb7a20227f55fa33f0a842f3bd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32380901044" target="_blank">2026-08-20 14:34:00</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
