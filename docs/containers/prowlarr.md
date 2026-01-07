---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag4247" onclick="CopyToClipboard('tag4247');return false;" class="tag-decoration">nightly</div><div id="tag8571" onclick="CopyToClipboard('tag8571');return false;" class="tag-decoration">nightly-2.3.2.5245</div><div id="tag8984" onclick="CopyToClipboard('tag8984');return false;" class="tag-decoration">nightly-ec0a820</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/ec0a8203f5b53d7981680d4428789e682fcf54ed" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20770102489" target="_blank">2026-01-07 03:57:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21227" onclick="CopyToClipboard('tag21227');return false;" class="tag-decoration">release</div><div id="tag32120" onclick="CopyToClipboard('tag32120');return false;" class="tag-decoration">release-2.3.0.5236</div><div id="tag30580" onclick="CopyToClipboard('tag30580');return false;" class="tag-decoration">release-8c66280</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/8c66280a8c6e1d830f7adb8700f3d8b4f1797eb4" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20770102990" target="_blank">2026-01-07 03:57:36</a></td></tr>
<tr><td><div id="tag25583" onclick="CopyToClipboard('tag25583');return false;" class="tag-decoration">testing</div><div id="tag20958" onclick="CopyToClipboard('tag20958');return false;" class="tag-decoration">testing-2.3.1.5238</div><div id="tag17543" onclick="CopyToClipboard('tag17543');return false;" class="tag-decoration">testing-4ebe84b</div></td><td>develop</td><td>Upstream image update</td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20690831657" target="_blank">2026-01-04 09:26:22</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name prowlarr \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
