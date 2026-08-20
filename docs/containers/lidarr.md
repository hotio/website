---
hide:
  - toc
title: hotio/lidarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/lidarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/lidarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/lidarr/lidarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag20908" onclick="CopyToClipboard('tag20908');return false;" class="tag-decoration">nightly</div><div id="tag21106" onclick="CopyToClipboard('tag21106');return false;" class="tag-decoration">nightly-e928a77</div><div id="tag15932" onclick="CopyToClipboard('tag15932');return false;" class="tag-decoration">nightly-3.1.3.5020</div></td><td>nightly</td><td><a href="https://github.com/hotio/lidarr/commit/e928a77a4f59b07ddd39ef55b809062dbd37aaf9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/32326858879" target="_blank">2026-08-20 03:03:27</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9322" onclick="CopyToClipboard('tag9322');return false;" class="tag-decoration">release</div><div id="tag28350" onclick="CopyToClipboard('tag28350');return false;" class="tag-decoration">release-b806b2c</div><div id="tag15135" onclick="CopyToClipboard('tag15135');return false;" class="tag-decoration">release-3.1.0.4875</div></td><td>master</td><td><a href="https://github.com/hotio/lidarr/commit/b806b2c35a388979dde74799549a0aa9ec2c3cad" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/32326860973" target="_blank">2026-08-20 03:03:25</a></td></tr>
<tr><td><div id="tag24148" onclick="CopyToClipboard('tag24148');return false;" class="tag-decoration">testing</div><div id="tag23513" onclick="CopyToClipboard('tag23513');return false;" class="tag-decoration">testing-5ca9850</div><div id="tag13533" onclick="CopyToClipboard('tag13533');return false;" class="tag-decoration">testing-3.1.3.4987</div></td><td>develop</td><td><a href="https://github.com/hotio/lidarr/commit/5ca9850401384816fe2aa4c40c3077e132b45fb6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/lidarr/actions/runs/32326865553" target="_blank">2026-08-20 03:03:34</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="lidarr" \
        -p 8686:8686 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8686/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/lidarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      lidarr:
        container_name: lidarr
        image: ghcr.io/hotio/lidarr
        ports:
          - "8686:8686"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8686/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
