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
<tr><td><div id="tag7863" onclick="CopyToClipboard('tag7863');return false;" class="tag-decoration">nightly</div><div id="tag4572" onclick="CopyToClipboard('tag4572');return false;" class="tag-decoration">nightly-2.3.2.5245</div><div id="tag9897" onclick="CopyToClipboard('tag9897');return false;" class="tag-decoration">nightly-ec0a820</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/ec0a8203f5b53d7981680d4428789e682fcf54ed" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20770102489" target="_blank">2026-01-07 03:57:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17793" onclick="CopyToClipboard('tag17793');return false;" class="tag-decoration">release</div><div id="tag1211" onclick="CopyToClipboard('tag1211');return false;" class="tag-decoration">release-2.3.0.5236</div><div id="tag1671" onclick="CopyToClipboard('tag1671');return false;" class="tag-decoration">release-8c66280</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/8c66280a8c6e1d830f7adb8700f3d8b4f1797eb4" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20770102990" target="_blank">2026-01-07 03:57:36</a></td></tr>
<tr><td><div id="tag19501" onclick="CopyToClipboard('tag19501');return false;" class="tag-decoration">testing</div><div id="tag10999" onclick="CopyToClipboard('tag10999');return false;" class="tag-decoration">testing-2.3.2.5245</div><div id="tag24198" onclick="CopyToClipboard('tag24198');return false;" class="tag-decoration">testing-3824951</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/3824951267a8680ed38dd47d5000ef8cd89d3ec7" target="_blank">Version update: 2.3.1.5238 => 2.3.2.5245</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20777119670" target="_blank">2026-01-07 09:41:05</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
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
