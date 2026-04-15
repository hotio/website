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
<tr><td><div id="tag6922" onclick="CopyToClipboard('tag6922');return false;" class="tag-decoration">nightly</div><div id="tag21420" onclick="CopyToClipboard('tag21420');return false;" class="tag-decoration">nightly-2fb17f3</div><div id="tag16327" onclick="CopyToClipboard('tag16327');return false;" class="tag-decoration">nightly-ff469cb6d7c8c45984cc008403736c83d8e9dc94</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/2fb17f3da98f3fe267409a400b4e4ea9ee074c31" target="_blank">Version update: 15b31093c008abd91ffc4f6753bf94462a670b2e => ff469cb6d7c8c45984cc008403736c83d8e9dc94</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24447596061" target="_blank">2026-04-15 09:42:45</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7419" onclick="CopyToClipboard('tag7419');return false;" class="tag-decoration">release</div><div id="tag18893" onclick="CopyToClipboard('tag18893');return false;" class="tag-decoration">release-5df35e9</div><div id="tag16248" onclick="CopyToClipboard('tag16248');return false;" class="tag-decoration">release-3.1.1</div><div id="tag5910" onclick="CopyToClipboard('tag5910');return false;" class="tag-decoration">release-v3</div><div id="tag2273" onclick="CopyToClipboard('tag2273');return false;" class="tag-decoration">release-v3.1</div><div id="tag5736" onclick="CopyToClipboard('tag5736');return false;" class="tag-decoration">release-v3.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/5df35e92231e7322a1023b380bc38ee7bb10d441" target="_blank">Version update: 3.1.0 => 3.1.1</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24352708598" target="_blank">2026-04-13 15:47:00</a></td></tr>
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
