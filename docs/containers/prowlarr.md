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
<tr><td><div id="tag29220" onclick="CopyToClipboard('tag29220');return false;" class="tag-decoration">nightly</div><div id="tag23891" onclick="CopyToClipboard('tag23891');return false;" class="tag-decoration">nightly-2.3.2.5245</div><div id="tag20738" onclick="CopyToClipboard('tag20738');return false;" class="tag-decoration">nightly-24d564f</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/24d564f3d45152b607f586dd872d962fb6b4d77a" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20842473645" target="_blank">2026-01-09 05:40:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1363" onclick="CopyToClipboard('tag1363');return false;" class="tag-decoration">release</div><div id="tag23640" onclick="CopyToClipboard('tag23640');return false;" class="tag-decoration">release-2.3.0.5236</div><div id="tag30230" onclick="CopyToClipboard('tag30230');return false;" class="tag-decoration">release-8c66280</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/8c66280a8c6e1d830f7adb8700f3d8b4f1797eb4" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20770102990" target="_blank">2026-01-07 03:57:36</a></td></tr>
<tr><td><div id="tag21162" onclick="CopyToClipboard('tag21162');return false;" class="tag-decoration">testing</div><div id="tag674" onclick="CopyToClipboard('tag674');return false;" class="tag-decoration">testing-2.3.2.5245</div><div id="tag5734" onclick="CopyToClipboard('tag5734');return false;" class="tag-decoration">testing-3824951</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/3824951267a8680ed38dd47d5000ef8cd89d3ec7" target="_blank">Version update: 2.3.1.5238 => 2.3.2.5245</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20777119670" target="_blank">2026-01-07 09:41:05</a></td></tr>
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
