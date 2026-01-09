---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3496" onclick="CopyToClipboard('tag3496');return false;" class="tag-decoration">release</div><div id="tag24126" onclick="CopyToClipboard('tag24126');return false;" class="tag-decoration">release-0.24.766</div><div id="tag4435" onclick="CopyToClipboard('tag4435');return false;" class="tag-decoration">release-0d2e700</div><div id="tag19091" onclick="CopyToClipboard('tag19091');return false;" class="tag-decoration">release-v0</div><div id="tag499" onclick="CopyToClipboard('tag499');return false;" class="tag-decoration">release-v0.24</div><div id="tag20210" onclick="CopyToClipboard('tag20210');return false;" class="tag-decoration">release-v0.24.766</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/0d2e700a2490c8122a7c8eb99480ced7f47daa98" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20842469527" target="_blank">2026-01-09 05:40:37</a></td></tr>
<tr><td><div id="tag29480" onclick="CopyToClipboard('tag29480');return false;" class="tag-decoration">testing</div><div id="tag18112" onclick="CopyToClipboard('tag18112');return false;" class="tag-decoration">testing-0.24.766</div><div id="tag31422" onclick="CopyToClipboard('tag31422');return false;" class="tag-decoration">testing-861e24e</div><div id="tag3884" onclick="CopyToClipboard('tag3884');return false;" class="tag-decoration">testing-v0</div><div id="tag22160" onclick="CopyToClipboard('tag22160');return false;" class="tag-decoration">testing-v0.24</div><div id="tag16295" onclick="CopyToClipboard('tag16295');return false;" class="tag-decoration">testing-v0.24.766</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/861e24e7d8f3289b444f1d2dfa3b6f38acb3371a" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20842469681" target="_blank">2026-01-09 05:40:38</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
