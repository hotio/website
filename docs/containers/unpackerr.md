---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag10171" onclick="CopyToClipboard('tag10171');return false;" class="tag-decoration">nightly</div><div id="tag14577" onclick="CopyToClipboard('tag14577');return false;" class="tag-decoration">nightly-b5977f0</div><div id="tag28449" onclick="CopyToClipboard('tag28449');return false;" class="tag-decoration">nightly-15dba7bb731d463128f6097077eb8f5c4a34ce00</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/b5977f0d2644d388e68d20015357b36f98369630" target="_blank">Version update: ec92f44bf5b7c4c876b76a0e4bfe4e160fc9d6c6 => 15dba7bb731d463128f6097077eb8f5c4a34ce00</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/23029648380" target="_blank">2026-03-12 23:59:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15531" onclick="CopyToClipboard('tag15531');return false;" class="tag-decoration">release</div><div id="tag1373" onclick="CopyToClipboard('tag1373');return false;" class="tag-decoration">release-d92585e</div><div id="tag3236" onclick="CopyToClipboard('tag3236');return false;" class="tag-decoration">release-0.15.2</div><div id="tag32537" onclick="CopyToClipboard('tag32537');return false;" class="tag-decoration">release-v0</div><div id="tag21139" onclick="CopyToClipboard('tag21139');return false;" class="tag-decoration">release-v0.15</div><div id="tag13981" onclick="CopyToClipboard('tag13981');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/d92585eeea221d20f390b80ab3df12abd2d297c9" target="_blank">Version update: 0.15.0 => 0.15.2</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22829297109" target="_blank">2026-03-08 20:33:31</a></td></tr>
<tr><td><div id="tag716" onclick="CopyToClipboard('tag716');return false;" class="tag-decoration">testing</div><div id="tag10192" onclick="CopyToClipboard('tag10192');return false;" class="tag-decoration">testing-5845218</div><div id="tag30314" onclick="CopyToClipboard('tag30314');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag28053" onclick="CopyToClipboard('tag28053');return false;" class="tag-decoration">testing-v0</div><div id="tag23353" onclick="CopyToClipboard('tag23353');return false;" class="tag-decoration">testing-v0.15</div><div id="tag22619" onclick="CopyToClipboard('tag22619');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/5845218ff998138f18abf6857a6b8952b1a41b81" target="_blank">Version update: 0.15.0 => 0.15.2</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/22829298045" target="_blank">2026-03-08 20:33:33</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
