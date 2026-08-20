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
<tr><td><div id="tag1528" onclick="CopyToClipboard('tag1528');return false;" class="tag-decoration">nightly</div><div id="tag15790" onclick="CopyToClipboard('tag15790');return false;" class="tag-decoration">nightly-6787b0c</div><div id="tag12014" onclick="CopyToClipboard('tag12014');return false;" class="tag-decoration">nightly-611dfa74d2ad85a3cfa451748f0b6702f7007fe1</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/6787b0c788764d2bf4e1c00201068f1bccc40d19" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32380905012" target="_blank">2026-08-20 14:34:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12526" onclick="CopyToClipboard('tag12526');return false;" class="tag-decoration">release</div><div id="tag16962" onclick="CopyToClipboard('tag16962');return false;" class="tag-decoration">release-d1ec40d</div><div id="tag9412" onclick="CopyToClipboard('tag9412');return false;" class="tag-decoration">release-5.1.1</div><div id="tag18864" onclick="CopyToClipboard('tag18864');return false;" class="tag-decoration">release-v5</div><div id="tag13957" onclick="CopyToClipboard('tag13957');return false;" class="tag-decoration">release-v5.1</div><div id="tag4125" onclick="CopyToClipboard('tag4125');return false;" class="tag-decoration">release-v5.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d1ec40deea24d8ed43de21cf8878d6584889c540" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32326358859" target="_blank">2026-08-20 02:55:12</a></td></tr>
<tr><td><div id="tag10151" onclick="CopyToClipboard('tag10151');return false;" class="tag-decoration">testing</div><div id="tag25094" onclick="CopyToClipboard('tag25094');return false;" class="tag-decoration">testing-2c7dbfe</div><div id="tag12688" onclick="CopyToClipboard('tag12688');return false;" class="tag-decoration">testing-5.1.1</div><div id="tag26066" onclick="CopyToClipboard('tag26066');return false;" class="tag-decoration">testing-v5</div><div id="tag28529" onclick="CopyToClipboard('tag28529');return false;" class="tag-decoration">testing-v5.1</div><div id="tag9857" onclick="CopyToClipboard('tag9857');return false;" class="tag-decoration">testing-v5.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2c7dbfe018961baaa831a13dda7f5259801fdc01" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32326359975" target="_blank">2026-08-20 02:55:13</a></td></tr>
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
