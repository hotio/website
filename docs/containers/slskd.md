---
hide:
  - toc
title: hotio/slskd
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project (GNU AGPL-3.0 license)](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag4555" onclick="CopyToClipboard('tag4555');return false;" class="tag-decoration">nightly</div><div id="tag21391" onclick="CopyToClipboard('tag21391');return false;" class="tag-decoration">nightly-296d796</div><div id="tag18571" onclick="CopyToClipboard('tag18571');return false;" class="tag-decoration">nightly-0.24.3.65534-92b49b7a</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/296d7968d771b3a730fe76e2ec2b3b7db1d84917" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21354182817" target="_blank">2026-01-26 10:20:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30867" onclick="CopyToClipboard('tag30867');return false;" class="tag-decoration">release</div><div id="tag11804" onclick="CopyToClipboard('tag11804');return false;" class="tag-decoration">release-9223a94</div><div id="tag31830" onclick="CopyToClipboard('tag31830');return false;" class="tag-decoration">release-0.24.3</div><div id="tag12200" onclick="CopyToClipboard('tag12200');return false;" class="tag-decoration">release-v0</div><div id="tag13022" onclick="CopyToClipboard('tag13022');return false;" class="tag-decoration">release-v0.24</div><div id="tag19629" onclick="CopyToClipboard('tag19629');return false;" class="tag-decoration">release-v0.24.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/9223a949bbd13934203bcbac0646fd2da32ce395" target="_blank">Upstream update: alpinevpn-46fe99f => alpinevpn-7ce2a5c</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21354183130" target="_blank">2026-01-26 10:20:58</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="slskd" \
        -p 5030:5030 \
        -p 5031:5031 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5030/tcp,5031/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/slskd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      slskd:
        container_name: slskd
        image: ghcr.io/hotio/slskd
        ports:
          - "5030:5030"
          - "5031:5031"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5030/tcp,5031/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
