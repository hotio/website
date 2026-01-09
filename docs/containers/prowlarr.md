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
<tr><td><div id="tag1219" onclick="CopyToClipboard('tag1219');return false;" class="tag-decoration">nightly</div><div id="tag10448" onclick="CopyToClipboard('tag10448');return false;" class="tag-decoration">nightly-2.3.2.5245</div><div id="tag4114" onclick="CopyToClipboard('tag4114');return false;" class="tag-decoration">nightly-24d564f</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/24d564f3d45152b607f586dd872d962fb6b4d77a" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20842473645" target="_blank">2026-01-09 05:40:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13006" onclick="CopyToClipboard('tag13006');return false;" class="tag-decoration">release</div><div id="tag11690" onclick="CopyToClipboard('tag11690');return false;" class="tag-decoration">release-2.3.0.5236</div><div id="tag6053" onclick="CopyToClipboard('tag6053');return false;" class="tag-decoration">release-9350ce9</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/9350ce93829898c09799397d1021ac7a7de1cd2f" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20842474096" target="_blank">2026-01-09 05:40:53</a></td></tr>
<tr><td><div id="tag18621" onclick="CopyToClipboard('tag18621');return false;" class="tag-decoration">testing</div><div id="tag3827" onclick="CopyToClipboard('tag3827');return false;" class="tag-decoration">testing-2.3.2.5245</div><div id="tag21237" onclick="CopyToClipboard('tag21237');return false;" class="tag-decoration">testing-955e32b</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/955e32b2857a8da46ec52b9af2588f8e314ad543" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20842474461" target="_blank">2026-01-09 05:40:54</a></td></tr>
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
