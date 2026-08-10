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
<tr><td><div id="tag28499" onclick="CopyToClipboard('tag28499');return false;" class="tag-decoration">nightly</div><div id="tag28748" onclick="CopyToClipboard('tag28748');return false;" class="tag-decoration">nightly-280c51f</div><div id="tag17098" onclick="CopyToClipboard('tag17098');return false;" class="tag-decoration">nightly-14ce150b31f93c3e066db39a8cf2a41f52dcb999</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/280c51f9d1db0aa834af40b0446ca438601b7159" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31382060096" target="_blank">2026-08-10 11:06:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22241" onclick="CopyToClipboard('tag22241');return false;" class="tag-decoration">release</div><div id="tag3888" onclick="CopyToClipboard('tag3888');return false;" class="tag-decoration">release-b5245d7</div><div id="tag23776" onclick="CopyToClipboard('tag23776');return false;" class="tag-decoration">release-5.0.4</div><div id="tag17791" onclick="CopyToClipboard('tag17791');return false;" class="tag-decoration">release-v5</div><div id="tag29382" onclick="CopyToClipboard('tag29382');return false;" class="tag-decoration">release-v5.0</div><div id="tag18194" onclick="CopyToClipboard('tag18194');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b5245d7225070a8fa2cfeb17d67ef0e89bb66136" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30372822483" target="_blank">2026-07-28 15:19:45</a></td></tr>
<tr><td><div id="tag17903" onclick="CopyToClipboard('tag17903');return false;" class="tag-decoration">testing</div><div id="tag2766" onclick="CopyToClipboard('tag2766');return false;" class="tag-decoration">testing-c07d660</div><div id="tag8466" onclick="CopyToClipboard('tag8466');return false;" class="tag-decoration">testing-5.1.0RC2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c07d6604e827abe29ae78cbf3202f43d935ad524" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30831971032" target="_blank">2026-08-03 16:23:43</a></td></tr>
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
