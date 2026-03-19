---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag30590" onclick="CopyToClipboard('tag30590');return false;" class="tag-decoration">nightly</div><div id="tag1359" onclick="CopyToClipboard('tag1359');return false;" class="tag-decoration">nightly-5371253</div><div id="tag27319" onclick="CopyToClipboard('tag27319');return false;" class="tag-decoration">nightly-25e376c74f7e89f7f57bb78c468115ca0d7958cb</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/5371253536d61e2b78051a43f2828d74452e0f3a" target="_blank">Version update: c7185d429df771e1468b64f58d332a2431178017 => 25e376c74f7e89f7f57bb78c468115ca0d7958cb</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/23291817663" target="_blank">2026-03-19 11:02:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13268" onclick="CopyToClipboard('tag13268');return false;" class="tag-decoration">release</div><div id="tag7413" onclick="CopyToClipboard('tag7413');return false;" class="tag-decoration">release-61e4a12</div><div id="tag5491" onclick="CopyToClipboard('tag5491');return false;" class="tag-decoration">release-3.1.0</div><div id="tag9649" onclick="CopyToClipboard('tag9649');return false;" class="tag-decoration">release-v3</div><div id="tag2920" onclick="CopyToClipboard('tag2920');return false;" class="tag-decoration">release-v3.1</div><div id="tag30449" onclick="CopyToClipboard('tag30449');return false;" class="tag-decoration">release-v3.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/61e4a126c6170ac9f9170f273b9f6bde04aa339f" target="_blank">Version update: 3.0.1 => 3.1.0</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22497080527" target="_blank">2026-02-27 17:40:24</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
