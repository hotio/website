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
<tr><td><div id="tag13855" onclick="CopyToClipboard('tag13855');return false;" class="tag-decoration">nightly</div><div id="tag31835" onclick="CopyToClipboard('tag31835');return false;" class="tag-decoration">nightly-3f8881a</div><div id="tag1750" onclick="CopyToClipboard('tag1750');return false;" class="tag-decoration">nightly-47a507f5a6be0780274db202663fc7f0c797aea2</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/3f8881a7c6369c538abc98b393289f649e8408d2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30372834488" target="_blank">2026-07-28 15:19:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32620" onclick="CopyToClipboard('tag32620');return false;" class="tag-decoration">release</div><div id="tag28495" onclick="CopyToClipboard('tag28495');return false;" class="tag-decoration">release-b5245d7</div><div id="tag4689" onclick="CopyToClipboard('tag4689');return false;" class="tag-decoration">release-5.0.4</div><div id="tag4767" onclick="CopyToClipboard('tag4767');return false;" class="tag-decoration">release-v5</div><div id="tag16602" onclick="CopyToClipboard('tag16602');return false;" class="tag-decoration">release-v5.0</div><div id="tag12729" onclick="CopyToClipboard('tag12729');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b5245d7225070a8fa2cfeb17d67ef0e89bb66136" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30372822483" target="_blank">2026-07-28 15:19:45</a></td></tr>
<tr><td><div id="tag31018" onclick="CopyToClipboard('tag31018');return false;" class="tag-decoration">testing</div><div id="tag20202" onclick="CopyToClipboard('tag20202');return false;" class="tag-decoration">testing-e30e9cd</div><div id="tag1796" onclick="CopyToClipboard('tag1796');return false;" class="tag-decoration">testing-5.1.0RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/e30e9cda9fd8faac03fa5d97373678faf97e191c" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29681380250" target="_blank">2026-07-19 09:19:48</a></td></tr>
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
