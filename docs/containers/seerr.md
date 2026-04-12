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
<tr><td><div id="tag32205" onclick="CopyToClipboard('tag32205');return false;" class="tag-decoration">nightly</div><div id="tag13551" onclick="CopyToClipboard('tag13551');return false;" class="tag-decoration">nightly-ee9503f</div><div id="tag13293" onclick="CopyToClipboard('tag13293');return false;" class="tag-decoration">nightly-43eff257e17e781b126f633327117a0d1b43d318</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/ee9503fa8ad36a59cde2b865d12578ab786fd361" target="_blank">Version update: 20ccd4bd38917ec55083e98aeaed3e9215df63bd => 43eff257e17e781b126f633327117a0d1b43d318</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24310401601" target="_blank">2026-04-12 15:47:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21111" onclick="CopyToClipboard('tag21111');return false;" class="tag-decoration">release</div><div id="tag29121" onclick="CopyToClipboard('tag29121');return false;" class="tag-decoration">release-61e4a12</div><div id="tag22378" onclick="CopyToClipboard('tag22378');return false;" class="tag-decoration">release-3.1.0</div><div id="tag21730" onclick="CopyToClipboard('tag21730');return false;" class="tag-decoration">release-v3</div><div id="tag25346" onclick="CopyToClipboard('tag25346');return false;" class="tag-decoration">release-v3.1</div><div id="tag12441" onclick="CopyToClipboard('tag12441');return false;" class="tag-decoration">release-v3.1.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/61e4a126c6170ac9f9170f273b9f6bde04aa339f" target="_blank">Version update: 3.0.1 => 3.1.0</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22497080527" target="_blank">2026-02-27 17:40:24</a></td></tr>
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
