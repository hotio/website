---
hide:
  - toc
title: hotio/duplicacy
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/duplicacy){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/duplicacy){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/duplicacy/tags){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://duplicacy.com){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23595" onclick="CopyToClipboard('tag23595');return false;" class="tag-decoration">release</div><div id="tag1126" onclick="CopyToClipboard('tag1126');return false;" class="tag-decoration">release-1.8.0</div><div id="tag9178" onclick="CopyToClipboard('tag9178');return false;" class="tag-decoration">release-1b164c8</div><div id="tag2691" onclick="CopyToClipboard('tag2691');return false;" class="tag-decoration">release-v1</div><div id="tag5164" onclick="CopyToClipboard('tag5164');return false;" class="tag-decoration">release-v1.8</div><div id="tag25708" onclick="CopyToClipboard('tag25708');return false;" class="tag-decoration">release-v1.8.0</div></td><td>Stable</td><td><a href="https://github.com/hotio/duplicacy/commit/1b164c8e7f2602730d5de88592cf979520bcdb23" target="_blank">Update upstream tag SHA and improve error handling in update scripts</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/20844844174" target="_blank">2026-01-09 07:41:23</a></td></tr>
<tr><td><div id="tag5643" onclick="CopyToClipboard('tag5643');return false;" class="tag-decoration">testing</div><div id="tag5814" onclick="CopyToClipboard('tag5814');return false;" class="tag-decoration">testing-1.8.3</div><div id="tag32426" onclick="CopyToClipboard('tag32426');return false;" class="tag-decoration">testing-03bd788</div><div id="tag1347" onclick="CopyToClipboard('tag1347');return false;" class="tag-decoration">testing-v1</div><div id="tag30981" onclick="CopyToClipboard('tag30981');return false;" class="tag-decoration">testing-v1.8</div><div id="tag25747" onclick="CopyToClipboard('tag25747');return false;" class="tag-decoration">testing-v1.8.3</div></td><td>Latest</td><td><a href="https://github.com/hotio/duplicacy/commit/03bd788edd2caf720e8e4aa95a17455e0e7f7d04" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/duplicacy/actions/runs/20850330423" target="_blank">2026-01-09 11:22:41</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="duplicacy" \
        --hostname="duplicacy" \
        -p 3875:3875 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_cache>:/cache \
        -v /<host_folder_logs>:/logs \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/duplicacy
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      duplicacy:
        container_name: duplicacy
        hostname: duplicacy
        image: ghcr.io/hotio/duplicacy
        ports:
          - "3875:3875"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_cache>:/cache
          - /<host_folder_logs>:/logs
          - /<host_folder_data>:/data
    ```

If you don't want to enter your password every time you restart the container, you can set the environment variable `DWE_PASSWORD` with your password or starting with version 1.4.1 a file `/config/keyring` will be created that stores your password encryted if you click the checkmark on the login page.

--8<-- "includes/wireguard.md"
