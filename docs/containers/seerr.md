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
<tr><td><div id="tag24353" onclick="CopyToClipboard('tag24353');return false;" class="tag-decoration">nightly</div><div id="tag7168" onclick="CopyToClipboard('tag7168');return false;" class="tag-decoration">nightly-1e6534f</div><div id="tag26968" onclick="CopyToClipboard('tag26968');return false;" class="tag-decoration">nightly-dfde4d34e69732935c0ffa72da4d1f15469b6774</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/1e6534fe6a2dc021a3f4337305da459999aae79a" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25700596178" target="_blank">2026-05-11 22:17:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13353" onclick="CopyToClipboard('tag13353');return false;" class="tag-decoration">release</div><div id="tag29325" onclick="CopyToClipboard('tag29325');return false;" class="tag-decoration">release-9ebed3e</div><div id="tag21864" onclick="CopyToClipboard('tag21864');return false;" class="tag-decoration">release-3.2.0</div><div id="tag11471" onclick="CopyToClipboard('tag11471');return false;" class="tag-decoration">release-v3</div><div id="tag32748" onclick="CopyToClipboard('tag32748');return false;" class="tag-decoration">release-v3.2</div><div id="tag15104" onclick="CopyToClipboard('tag15104');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/9ebed3e95a52d7b7d64657ae642a4768999cf343" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25700627538" target="_blank">2026-05-11 22:18:29</a></td></tr>
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
