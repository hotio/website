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
<tr><td><div id="tag5183" onclick="CopyToClipboard('tag5183');return false;" class="tag-decoration">nightly</div><div id="tag6848" onclick="CopyToClipboard('tag6848');return false;" class="tag-decoration">nightly-d09c4b5</div><div id="tag21253" onclick="CopyToClipboard('tag21253');return false;" class="tag-decoration">nightly-20915cc626ceb5071ad5a1eba9d49f2b0a5f261c</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/d09c4b54d418b2d4402be7542112065311f9b7b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33511450231" target="_blank">2026-09-01 13:06:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25857" onclick="CopyToClipboard('tag25857');return false;" class="tag-decoration">release</div><div id="tag18167" onclick="CopyToClipboard('tag18167');return false;" class="tag-decoration">release-e8f92c1</div><div id="tag18389" onclick="CopyToClipboard('tag18389');return false;" class="tag-decoration">release-5.1.2</div><div id="tag26275" onclick="CopyToClipboard('tag26275');return false;" class="tag-decoration">release-v5</div><div id="tag26229" onclick="CopyToClipboard('tag26229');return false;" class="tag-decoration">release-v5.1</div><div id="tag19932" onclick="CopyToClipboard('tag19932');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/e8f92c155745ea9feac86447635d92b2529d5ca8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33481397362" target="_blank">2026-09-01 07:17:06</a></td></tr>
<tr><td><div id="tag22795" onclick="CopyToClipboard('tag22795');return false;" class="tag-decoration">testing</div><div id="tag14679" onclick="CopyToClipboard('tag14679');return false;" class="tag-decoration">testing-10ed1a6</div><div id="tag18640" onclick="CopyToClipboard('tag18640');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag31875" onclick="CopyToClipboard('tag31875');return false;" class="tag-decoration">testing-v5</div><div id="tag20452" onclick="CopyToClipboard('tag20452');return false;" class="tag-decoration">testing-v5.1</div><div id="tag21519" onclick="CopyToClipboard('tag21519');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/10ed1a6bc36acefd4283b808485e8d43b36e221e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33481394412" target="_blank">2026-09-01 07:17:03</a></td></tr>
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
