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
<tr><td><div id="tag18727" onclick="CopyToClipboard('tag18727');return false;" class="tag-decoration">nightly</div><div id="tag12958" onclick="CopyToClipboard('tag12958');return false;" class="tag-decoration">nightly-ea9c8f5</div><div id="tag10155" onclick="CopyToClipboard('tag10155');return false;" class="tag-decoration">nightly-3213cd74cf16053843394c9c47b357daca5f012b</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/ea9c8f5e9cccecf739d9dd02444661455d6c27a9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31252947033" target="_blank">2026-08-08 10:30:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28491" onclick="CopyToClipboard('tag28491');return false;" class="tag-decoration">release</div><div id="tag32359" onclick="CopyToClipboard('tag32359');return false;" class="tag-decoration">release-b5245d7</div><div id="tag21694" onclick="CopyToClipboard('tag21694');return false;" class="tag-decoration">release-5.0.4</div><div id="tag24380" onclick="CopyToClipboard('tag24380');return false;" class="tag-decoration">release-v5</div><div id="tag17617" onclick="CopyToClipboard('tag17617');return false;" class="tag-decoration">release-v5.0</div><div id="tag22010" onclick="CopyToClipboard('tag22010');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b5245d7225070a8fa2cfeb17d67ef0e89bb66136" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30372822483" target="_blank">2026-07-28 15:19:45</a></td></tr>
<tr><td><div id="tag18196" onclick="CopyToClipboard('tag18196');return false;" class="tag-decoration">testing</div><div id="tag13628" onclick="CopyToClipboard('tag13628');return false;" class="tag-decoration">testing-c07d660</div><div id="tag32133" onclick="CopyToClipboard('tag32133');return false;" class="tag-decoration">testing-5.1.0RC2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c07d6604e827abe29ae78cbf3202f43d935ad524" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30831971032" target="_blank">2026-08-03 16:23:43</a></td></tr>
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
